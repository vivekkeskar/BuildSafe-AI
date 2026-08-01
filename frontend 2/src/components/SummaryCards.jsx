import "./SummaryCards.css";
import { ShieldCheck, AlertTriangle, HardHat } from "lucide-react";

export default function SummaryCards({ result }) {
  return (
    <div className="summary-grid">

      <div className="summary-card">
        <ShieldCheck size={34} color="#2563eb" />
        <h4>Compliance</h4>
        <h2>{result.compliance}%</h2>
      </div>

      <div className="summary-card">
        <AlertTriangle
          size={34}
          color={
            result.risk.level === "Low"
              ? "#16a34a"
              : result.risk.level === "Medium"
              ? "#f59e0b"
              : "#ef4444"
          }
        />
        <h4>Risk Level</h4>
        <h2>{result.risk.level}</h2>
      </div>

      <div className="summary-card">
        <HardHat size={34} color="#2563eb" />
        <h4>PPE Detected</h4>
        <h2>{result.detectedItems.length}</h2>
      </div>

    </div>
  );
}