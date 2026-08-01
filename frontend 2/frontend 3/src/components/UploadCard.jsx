import "./UploadCard.css";
import { UploadCloud } from "lucide-react";

export default function UploadCard({
  preview,
  handleImage,
  handleAnalyze,
  loading,
}) {
  return (
    <div className="upload-card">

      <div className="drop-area">

        <UploadCloud size={70} color="#2563eb" />

        <h2>Drag & Drop Image</h2>

        <p>
          Upload a construction site image for AI-powered PPE inspection.
        </p>

        <label className="browse-btn">

          Browse Files

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            hidden
          />

        </label>

      </div>

      {preview && (

        <img
          src={preview}
          className="preview"
          alt="preview"
        />

      )}

      <button
        className="analyze-btn"
        onClick={handleAnalyze}
        disabled={loading}
      >
        {loading ? "Analyzing..." : "🔍 Analyze Safety"}
      </button>

    </div>
  );
}