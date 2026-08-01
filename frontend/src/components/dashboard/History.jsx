import { useEffect, useState } from "react";
import "./History.css";
import { getInspectionHistory } from "../../services/api";
import {
  FaHistory,
  FaShieldAlt,
  FaExclamationTriangle,
} from "react-icons/fa";

export default function History() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {
      const data = await getInspectionHistory();
      setHistory(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const badgeClass = (level) => {
    switch (level) {
      case "Low":
        return "risk-low";
      case "Medium":
        return "risk-medium";
      case "High":
        return "risk-high";
      case "Critical":
        return "risk-critical";
      default:
        return "";
    }
  };

  return (
    <section className="history-section">

      <div className="history-header">

        <div className="history-title">

          <FaHistory className="history-icon" />

          <h2>Inspection History</h2>

        </div>

        <p>
          Every AI inspection is stored securely and can be
          reviewed anytime.
        </p>

      </div>

      {loading ? (

        <div className="history-loading">
          Loading inspection history...
        </div>

      ) : history.length === 0 ? (

        <div className="history-empty">
          No inspection records found.
        </div>

      ) : (

        <div className="history-grid">

          {history.map((item) => (

            <div
              key={item._id}
              className="history-card"
            >

              <div className="history-top">

                <span className="inspection-type">
                  {item.inspectionType.toUpperCase()}
                </span>

                <span
                  className={`risk-badge ${badgeClass(
                    item.risk.level
                  )}`}
                >
                  {item.risk.level}
                </span>

              </div>

              <div className="history-score">

                {item.compliance}%

              </div>

              <div className="history-label">

                Compliance Score

              </div>

              <div className="progress">

                <div
                  className="progress-fill"
                  style={{
                    width: `${item.compliance}%`,
                  }}
                />

              </div>

              <div className="history-details">

                <div>

                  <FaShieldAlt />

                  <span>
                    Required :
                    {" "}
                    {item.requiredItems.length}
                  </span>

                </div>

                <div>

                  <FaShieldAlt />

                  <span>
                    Detected :
                    {" "}
                    {item.detectedItems.length}
                  </span>

                </div>

                <div>

                  <FaExclamationTriangle />

                  <span>
                    Missing :
                    {" "}
                    {item.missingItems.length}
                  </span>

                </div>

              </div>

              <div className="history-date">

                {new Date(
                  item.createdAt
                ).toLocaleString()}

              </div>

            </div>

          ))}

        </div>

      )}

    </section>
  );
}