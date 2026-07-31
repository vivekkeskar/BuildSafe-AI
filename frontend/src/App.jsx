import { useState } from "react";

import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import UploadCard from "./components/UploadCard";
import ResultCard from "./components/ResultCard";
import Footer from "./components/Footer";

import { analyzeImage } from "./services/api";

export default function App() {
  const [preview, setPreview] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];

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
    <div className="min-h-screen scroll-smooth bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">

      {/* Background Glow */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl"></div>

        <div className="absolute right-0 top-80 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>

        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-green-500/10 blur-3xl"></div>
      </div>

      <Navbar />

      <Hero />

      {/* Upload Section */}
      <section
        id="upload"
        className="mx-auto max-w-7xl px-6 py-20"
      >
        <UploadCard
          preview={preview}
          handleImage={handleImage}
          handleAnalyze={handleAnalyze}
          loading={loading}
        />
      </section>

      {/* Result Section */}
      <section
        id="results"
        className="mx-auto max-w-7xl px-6 pb-24"
      >
        <ResultCard result={result} />
      </section>

      <Footer />

    </div>
  );
}