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
You are an AI Factory Safety Inspector.

Inspection Type:
${inspectionType}

${prompt}

Analyze the uploaded image carefully.

Identify ONLY the PPE items that are clearly visible.

Return ONLY valid JSON in this format:

{
  "detectedItems": []
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
      return response.text;
    } catch (error) {
      attempts--;

      if (error.status === 503 && attempts > 0) {
        console.log("⚠️ Gemini is busy. Retrying in 3 seconds...");
        await delay(3000);
        continue;
      }

      console.error("\n========== GEMINI ERROR ==========");
      console.error("Status :", error.status);
      console.error("Message:", error.message);
      console.error(error);
      console.error("==================================\n");

      throw new Error("Failed to analyze inspection evidence.");
    }
  }
};

module.exports = {
  analyzeEvidence,
};