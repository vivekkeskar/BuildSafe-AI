from flask import Flask, render_template, request
import os

app = Flask(__name__)

UPLOAD_FOLDER = "uploads"
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/analyze", methods=["POST"])
def analyze():

    image = request.files["image"]

    if image.filename == "":
        return "No image selected"

    image_path = os.path.join(app.config["UPLOAD_FOLDER"], image.filename)

    image.save(image_path)

    return "Image uploaded successfully."


if __name__ == "__main__":
    app.run(debug=True)
