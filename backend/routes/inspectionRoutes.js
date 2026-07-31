const express = require("express");
const upload = require("../middlewares/upload");

const {
  analyzeInspection,
} = require("../controllers/inspectionController");

const router = express.Router();

router.post(
  "/analyze",
  upload.single("image"),
  analyzeInspection
);

module.exports = router;