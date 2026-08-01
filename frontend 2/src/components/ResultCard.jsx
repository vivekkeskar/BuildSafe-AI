import "./ResultCard.css";
import ProgressBar from "./ProgressBar";
import RiskBadge from "./RiskBadge";
import SummaryCards from "./SummaryCards";

export default function ResultCard({ result }) {
  return (
    <div className="result-card">

      <h2>Inspection Summary</h2>
      <SummaryCards result={result} />

      <div className="summary">

        <div>
          <h4>Compliance</h4>
          <ProgressBar value={result.compliance} />
        </div>

        <div>
          <h4>Risk Level</h4>
          <RiskBadge risk={result.risk} />
        </div>

      </div>

      <div className="grid">

        <div className="card">

          <h3>✅ Detected PPE</h3>

          {result.detectedItems.map((item) => (
            <div className="item success" key={item}>
              {item}
            </div>
          ))}

        </div>

        <div className="card">

          <h3>❌ Missing PPE</h3>

          {result.missingItems.length === 0 ? (
            <div className="item success">
              No Missing PPE 🎉
            </div>
          ) : (
            result.missingItems.map((item) => (
              <div className="item danger" key={item}>
                {item}
              </div>
            ))
          )}

        </div>

      </div>

    </div>
  );
}