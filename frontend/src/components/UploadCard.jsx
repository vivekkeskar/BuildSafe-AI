import "./UploadCard.css";
import { UploadCloud, ImageIcon, Loader2 } from "lucide-react";

export default function UploadCard({
  preview,
  handleImage,
  handleAnalyze,
  loading,
}) {
  return (
    <div className="upload-card">
      <div className="upload-layout">

        {/* Left Panel */}
        <div className="upload-left">

          <UploadCloud size={60} color="#f97316" />

          <h2>Upload Construction Image</h2>

          <p>
            Upload a construction site image to inspect PPE compliance using AI.
          </p>

          <label className="browse-btn">
            <ImageIcon size={18} />
            <span>{preview ? "Change Image" : "Browse Image"}</span>

            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              hidden
            />
          </label>

          <button
            className="analyze-btn"
            onClick={handleAnalyze}
            disabled={loading || !preview}
          >
            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span>Analyzing...</span>
              </>
            ) : (
              <>
                🔍 <span>Analyze Safety</span>
              </>
            )}
          </button>

        </div>

        {/* Right Panel */}
        <div className="upload-right">

          <div className="preview-box">

            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="preview-large"
              />
            ) : (
              <div className="empty-preview">
                <div className="empty-icon">🏗️</div>

                <h3>No Image Selected</h3>

                <p>
                  Your uploaded image will appear here.
                </p>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}