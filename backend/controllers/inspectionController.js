const { analyzeEvidence } = require("../services/geminiService");
const analyzeDecision = require("../utils/decisionGapEngine");

const analyzeInspection = async (req, res) => {
  try {
    const { inspectionType, prompt } = req.body;

    // Image path (if uploaded)
    const imagePath = req.file ? req.file.path : null;

    const geminiResponse = await analyzeEvidence(
      inspectionType,
      prompt,
      imagePath
    );

    let detectedItems = [];

    try {
      // Remove markdown code fences if Gemini returns them
      const cleanResponse = geminiResponse
        .replace(/```json/gi, "")
        .replace(/```/g, "")
        .trim();

      console.log("\n===== CLEAN GEMINI RESPONSE =====");
      console.log(cleanResponse);
      console.log("=================================\n");

      const parsed = JSON.parse(cleanResponse);

      detectedItems = parsed.detectedItems || [];
    } catch (err) {
      console.error("\n===== RAW GEMINI RESPONSE =====");
      console.error(geminiResponse);
      console.error("================================\n");

      return res.status(500).json({
        success: false,
        message: "Invalid JSON response from Gemini",
      });
    }

    const result = analyzeDecision(
      inspectionType,
      detectedItems
    );

    return res.status(200).json({
      success: true,
      data: result,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  analyzeInspection,
};