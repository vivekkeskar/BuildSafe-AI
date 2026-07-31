const checklists = require("./checklists");

const synonymMap = {
  helmet: "Safety Helmet",
  "safety helmet": "Safety Helmet",

  vest: "Safety Vest",
  "safety vest": "Safety Vest",

  shoes: "Safety Shoes",
  "safety shoes": "Safety Shoes",

  gloves: "Safety Gloves",
  "safety gloves": "Safety Gloves",

  goggles: "Safety Goggles",
  "safety goggles": "Safety Goggles",
};

const normalizeItems = (items) => {
  return items.map((item) => {
    const key = item.toLowerCase().trim();
    return synonymMap[key] || item;
  });
};

const calculateRisk = (missingCount) => {
  if (missingCount === 0) {
    return {
      level: "Low",
      score: 10,
    };
  }

  if (missingCount === 1) {
    return {
      level: "Medium",
      score: 40,
    };
  }

  if (missingCount === 2) {
    return {
      level: "High",
      score: 70,
    };
  }

  return {
    level: "Critical",
    score: 90,
  };
};

const analyzeInspection = (inspectionType, detectedItems) => {
  const requiredItems = checklists[inspectionType];

  if (!requiredItems) {
    throw new Error("Invalid inspection type");
  }

  const normalizedDetectedItems = normalizeItems(detectedItems);

  const missingItems = requiredItems.filter(
    (item) => !normalizedDetectedItems.includes(item)
  );

  const detectedCount = requiredItems.length - missingItems.length;

  const compliance = Math.round(
    (detectedCount / requiredItems.length) * 100
  );

  const risk = calculateRisk(missingItems.length);

  return {
    inspectionType,
    requiredItems,
    detectedItems: normalizedDetectedItems,
    missingItems,
    compliance,
    risk,
  };
};

module.exports = analyzeInspection;