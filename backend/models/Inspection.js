const mongoose = require("mongoose");

const inspectionSchema = new mongoose.Schema(
  {
    inspectionType: {
      type: String,
      required: true,
    },

    compliance: {
      type: Number,
      required: true,
    },

    requiredItems: [String],

    detectedItems: [String],

    missingItems: [String],

    risk: {
      level: String,
      score: Number,
    },

    // NEW AI AUDITOR FIELDS
    hazards: {
      type: [String],
      default: [],
    },

    recommendations: {
      type: [String],
      default: [],
    },

    executiveSummary: {
      type: String,
      default: "",
    },

    imageName: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Inspection",
  inspectionSchema
);