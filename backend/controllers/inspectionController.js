const { analyzeEvidence } = require("../services/geminiService");
const analyzeDecision = require("../utils/decisionGapEngine");
const Inspection = require("../models/Inspection");

// Analyze inspection
const analyzeInspection = async (req, res) => {
  try {
    const { inspectionType, prompt } = req.body;

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

    let parsed;

    try {
      parsed = JSON.parse(cleanResponse);
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: "Invalid JSON returned by Gemini",
      });
    }

    // PPE detected by Gemini
    const detectedItems = parsed.detectedItems || [];

    // Existing scoring engine
    const result = analyzeDecision(
      inspectionType,
      detectedItems
    );

    // ===== NEW AI AUDITOR DATA =====
    result.hazards = parsed.hazards || [];

    result.recommendations =
      parsed.recommendations || [];

    result.executiveSummary =
      parsed.executiveSummary ||
      "No executive summary generated.";

    // Save inspection
    await Inspection.create({
      inspectionType: result.inspectionType,
      compliance: result.compliance,
      requiredItems: result.requiredItems,
      detectedItems: result.detectedItems,
      missingItems: result.missingItems,
      risk: result.risk,

      hazards: result.hazards,
      recommendations: result.recommendations,
      executiveSummary: result.executiveSummary,

      imageName: req.file?.originalname || "",
    });

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

// Inspection history
const getInspectionHistory = async (req, res) => {
  try {
    const history = await Inspection.find().sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      count: history.length,
      data: history,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Dashboard statistics
const getDashboardStats = async (req, res) => {
  try {
    const inspections = await Inspection.find();

    const totalInspections = inspections.length;

    const averageCompliance =
      totalInspections === 0
        ? 0
        : Math.round(
            inspections.reduce(
              (sum, item) => sum + item.compliance,
              0
            ) / totalInspections
          );

    const criticalCount = inspections.filter(
      (item) => item.risk.level === "Critical"
    ).length;

    const highCount = inspections.filter(
      (item) => item.risk.level === "High"
    ).length;

    const mediumCount = inspections.filter(
      (item) => item.risk.level === "Medium"
    ).length;

    const lowCount = inspections.filter(
      (item) => item.risk.level === "Low"
    ).length;

    return res.status(200).json({
      success: true,
      data: {
        totalInspections,
        averageCompliance,
        criticalCount,
        highCount,
        mediumCount,
        lowCount,
      },
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
  getInspectionHistory,
  getDashboardStats,
};