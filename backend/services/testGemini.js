require("dotenv").config({ path: "../.env" });

const { analyzeEvidence } = require("./geminiService");

async function test() {
  try {
    const result = await analyzeEvidence(
      "ppe",
      "A worker is wearing a helmet, reflective vest and safety shoes."
    );

    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

test();