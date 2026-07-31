const { analyzeEvidence } = require("../services/geminiService");
const analyzeDecision = require("../utils/decisionGapEngine");

const analyzeInspection = async (req, res) => {
  try {
    const { inspectionType, prompt } = req.body;

    const geminiResponse = await analyzeEvidence(
      inspectionType,
      prompt
    );

    let detectedItems = [];

    try {
      const parsed = JSON.parse(geminiResponse);
      detectedItems = parsed.detectedItems || [];
    } catch (err) {
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
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  analyzeInspection,
};