import { useState } from "react";
import "./App.css";
import { analyzeImage } from "./services/api";
import ResultCard from "./components/ResultCard";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImage = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
    setResult(null);
  };

  const handleAnalyze = async () => {
    if (!image) {
      alert("Please upload an image.");
      return;
    }

    try {
      setLoading(true);

      const data = await analyzeImage(image);

      setResult(data);
    } catch (err) {
      console.error(err);
      alert("Analysis failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>🦺 BuildSafe AI</h1>
      <p>AI Powered Construction Safety Inspection</p>

      <input
        type="file"
        accept="image/*"
        onChange={handleImage}
      />

      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="preview"
        />
      )}

      <button onClick={handleAnalyze}>
        {loading ? "Analyzing..." : "Analyze Image"}
      </button>

      {result && <ResultCard result={result} />}
    </div>
  );
}

export default App;