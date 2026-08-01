const express = require("express");
const upload = require("../middlewares/upload");

const {
  analyzeInspection,
  getInspectionHistory,
  getDashboardStats,
} = require("../controllers/inspectionController");

const router = express.Router();

// Analyze inspection
router.post(
  "/analyze",
  upload.single("image"),
  analyzeInspection
);

// Inspection history
router.get("/history", getInspectionHistory);

// Dashboard statistics
router.get("/dashboard", getDashboardStats);

module.exports = router;