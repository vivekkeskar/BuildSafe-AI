from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/analyze", methods=["POST"])
def analyze():

    image = request.files["image"]

    if image.filename == "":
        return "No image selected"

    # AI code will be added later
    return "Image uploaded successfully."


if __name__ == "__main__":
    app.run(debug=True)
