const { analyzeEvidence } = require("../services/geminiService");
const analyzeDecision = require("../utils/decisionGapEngine");
const Inspection = require("../models/Inspection");

const analyzeInspection = async (req, res) => {
  try {
    const { inspectionType, prompt } = req.body;

    console.log("========== REQUEST ==========");
    console.log("Inspection Type:", inspectionType);
    console.log("Prompt:", prompt);
    console.log("File:", req.file?.originalname);
    console.log("=============================\n");

    const imagePath = req.file ? req.file.path : null;

    const geminiResponse = await analyzeEvidence(
      inspectionType,
      prompt,
      imagePath
    );

    const cleanResponse = geminiResponse
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    console.log("========== GEMINI RESPONSE ==========");
    console.log(cleanResponse);
    console.log("=====================================\n");

    let parsed;

    try {
      parsed = JSON.parse(cleanResponse);
    } catch (err) {
      console.error("❌ JSON Parse Error");
      console.error(err);

      return res.status(500).json({
        success: false,
        message: "Invalid JSON returned by Gemini",
      });
    }

    const detectedItems = parsed.detectedItems || [];

    const result = analyzeDecision(
      inspectionType,
      detectedItems
    );

    console.log("========== DECISION ENGINE ==========");
    console.log(result);
    console.log("=====================================\n");

    try {
      const savedInspection = await Inspection.create({
        inspectionType: result.inspectionType,
        compliance: Number(result.compliance),
        requiredItems: result.requiredItems || [],
        detectedItems: result.detectedItems || [],
        missingItems: result.missingItems || [],
        risk: {
          level: result.risk?.level || "Low",
          score: Number(result.risk?.score || 0),
        },
        imageName: req.file?.originalname || "",
      });

      console.log("✅ Saved to MongoDB");
      console.log(savedInspection);

    } catch (dbError) {
      console.error("❌ DATABASE ERROR");
      console.error(dbError);

      return res.status(500).json({
        success: false,
        message: "Database save failed",
        error: dbError.message,
      });
    }

    return res.status(200).json({
      success: true,
      data: result,
    });

  } catch (error) {
    console.error("❌ BACKEND ERROR");
    console.error(error);
    console.error(error.stack);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  analyzeInspection,
};