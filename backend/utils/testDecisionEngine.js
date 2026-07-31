const analyzeInspection = require("./decisionGapEngine");

const result = analyzeInspection("ppe", [
  "Safety Helmet",
  "Safety Vest",
  "Safety Shoes",
]);

console.log(result);