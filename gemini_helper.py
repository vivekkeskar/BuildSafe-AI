import google.generativeai as genai
from PIL import Image
import os
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")

genai.configure(api_key=api_key)

model = genai.GenerativeModel("gemini-1.5-flash")


def analyze_image(image_path):

    image = Image.open(image_path)

    prompt = """
    You are a construction safety inspector.

    Analyze this construction site image.

    Tell me:
    1. Safety Score out of 100
    2. PPE violations
    3. Hazards found
    4. Risk Level
    5. Safety recommendations

    Keep the response short and clear.
    """

    response = model.generate_content([prompt, image])

    return response.text
