import "./RiskBadge.css";

export default function RiskBadge({ level, score }) {

  const getClass = () => {
    switch (level?.toLowerCase()) {
      case "low":
        return "low";

      case "medium":
        return "medium";

      case "high":
        return "high";

      default:
        return "medium";
    }
  };

  return (
    <div className={`risk-badge ${getClass()}`}>

      <div className="risk-left">

        <h3>Risk Level</h3>

        <span>{level}</span>

      </div>

      <div className="risk-right">

        <h3>Risk Score</h3>

        <span>{score}/100</span>

      </div>

    </div>
  );
}