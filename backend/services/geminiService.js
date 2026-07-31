const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const analyzeEvidence = async (inspectionType, prompt) => {
  let attempts = 3;

  while (attempts > 0) {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `
You are an AI Factory Safety Inspector.

Inspection Type:
${inspectionType}

${prompt}

Return ONLY valid JSON in the following format:

{
  "detectedItems": []
}
`,
      });

      return response.text;
    } catch (error) {
      attempts--;

      if (error.status === 503 && attempts > 0) {
        console.log("⚠️ Gemini is busy. Retrying in 3 seconds...");
        await delay(3000);
        continue;
      }

      console.error("========== GEMINI ERROR ==========");
      console.error("Status:", error.status);
      console.error("Message:", error.message);
      console.error(error);
      console.error("==================================");

      throw new Error("Failed to analyze inspection evidence.");
    }
  }
};

module.exports = {
  analyzeEvidence,
};