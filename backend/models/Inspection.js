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

    imageName: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Inspection",
  inspectionSchema
);