const express = require("express");

const {
  analyzeInspection,
} = require("../controllers/inspectionController");

const router = express.Router();

router.post("/analyze", analyzeInspection);

module.exports = router;