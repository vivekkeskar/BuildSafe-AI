const { GoogleGenAI } = require("@google/genai");
const fs = require("fs");
const path = require("path");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const analyzeEvidence = async (
  inspectionType,
  prompt,
  imagePath = null
) => {
  let attempts = 3;

  while (attempts > 0) {
    try {
      let contents;

      const promptText = `
You are a Senior Construction Safety Auditor with over 20 years of experience.

Your task is to inspect the uploaded construction site image like a real safety officer.

Analyze the ENTIRE scene carefully.

Focus on:

1. PPE Compliance
- Safety Helmet
- Safety Vest
- Safety Shoes
- Safety Gloves
- Safety Goggles

2. Unsafe Conditions
- Workers without PPE
- Unsafe ladder usage
- Unsafe scaffolding
- Electrical hazards
- Fire hazards
- Excavation hazards
- Poor housekeeping
- Falling object hazards
- Unsafe material storage
- Missing barricades

3. Site Risk

4. Practical Safety Recommendations

VERY IMPORTANT:

Only include PPE items that are clearly visible.

Return ONLY valid JSON.

{
  "detectedItems": [
    "Safety Helmet",
    "Safety Vest"
  ],

  "hazards": [
    "Worker is not wearing a safety helmet.",
    "Electrical cable is lying on the ground."
  ],

  "recommendations": [
    "Provide safety helmets before work starts.",
    "Remove electrical cable from walkway."
  ],

  "executiveSummary":
    "The site has multiple PPE and housekeeping violations. Immediate corrective action is recommended before work continues."
}
`;

      if (imagePath) {
        const extension = path.extname(imagePath).toLowerCase();

        const mimeTypes = {
          ".jpg": "image/jpeg",
          ".jpeg": "image/jpeg",
          ".png": "image/png",
          ".webp": "image/webp",
        };

        const imageBase64 = fs.readFileSync(imagePath, {
          encoding: "base64",
        });

        contents = [
          {
            inlineData: {
              mimeType: mimeTypes[extension] || "image/jpeg",
              data: imageBase64,
            },
          },
          {
            text: promptText,
          },
        ];
      } else {
        contents = promptText;
      }

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents,
      });

      console.log("\n========== GEMINI RAW RESPONSE ==========");
      console.log(response.text);
      console.log("=========================================\n");

      return response.text;

    } catch (error) {
      attempts--;

      if (error.status === 503 && attempts > 0) {
        console.log("Gemini busy... Retrying...");
        await delay(3000);
        continue;
      }

      console.error(error);

      throw new Error("Failed to analyze inspection evidence.");
    }
  }
};

module.exports = {
  analyzeEvidence,
};