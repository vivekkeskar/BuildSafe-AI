const checklists = require("./checklists");

const synonymMap = {
  // Helmet
  "helmet": "Safety Helmet",
  "hard hat": "Safety Helmet",
  "hardhat": "Safety Helmet",
  "safety helmet": "Safety Helmet",

  // Vest
  "vest": "Safety Vest",
  "safety vest": "Safety Vest",
  "high-visibility vest": "Safety Vest",
  "high visibility vest": "Safety Vest",
  "reflective vest": "Safety Vest",
  "hi-vis vest": "Safety Vest",

  // Shoes
  "shoes": "Safety Shoes",
  "safety shoes": "Safety Shoes",
  "boots": "Safety Shoes",
  "work boots": "Safety Shoes",
  "safety boots": "Safety Shoes",

  // Gloves
  "gloves": "Safety Gloves",
  "safety gloves": "Safety Gloves",
  "work gloves": "Safety Gloves",
  "protective gloves": "Safety Gloves",

  // Goggles
  "goggles": "Safety Goggles",
  "safety goggles": "Safety Goggles",
  "safety glasses": "Safety Goggles",
  "protective glasses": "Safety Goggles",
  "eye protection": "Safety Goggles",
};

const normalizeItems = (items) => {
  return [
    ...new Set(
      items.map((item) => {
        const key = item.toLowerCase().trim();
        return synonymMap[key] || item;
      })
    ),
  ];
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