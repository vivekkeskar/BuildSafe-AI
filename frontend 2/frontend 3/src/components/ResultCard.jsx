import "./ResultCard.css";

import SummaryCards from "./SummaryCards";
import ProgressBar from "./ProgressBar";
import RiskBadge from "./RiskBadge";

export default function ResultCard({ result }) {
  if (!result || !result.data) return null;

  const {
    compliance,
    detectedItems,
    missingItems,
    risk,
  } = result.data;

  return (
    <div className="result-card">

      <h2>Inspection Report</h2>

      <SummaryCards
        compliance={compliance}
        detected={detectedItems.length}
        missing={missingItems.length}
        risk={risk.level}
      />

      <ProgressBar compliance={compliance} />

      <RiskBadge
        level={risk.level}
        score={risk.score}
      />

      <div className="ppe-grid">

        <div className="ppe-box">

          <h3>✅ Detected PPE</h3>

          {detectedItems.length === 0 ? (
            <p>No PPE detected</p>
          ) : (
            <ul>
              {detectedItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}

        </div>

        <div className="ppe-box missing">

          <h3>❌ Missing PPE</h3>

          {missingItems.length === 0 ? (
            <p>No Missing PPE</p>
          ) : (
            <ul>
              {missingItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}

        </div>

      </div>

    </div>
  );
}