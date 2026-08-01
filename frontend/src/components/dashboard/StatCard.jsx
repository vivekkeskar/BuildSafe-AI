import "./StatCard.css";
import {
  FaDatabase,
  FaShieldAlt,
  FaExclamationTriangle,
  FaCheckCircle,
} from "react-icons/fa";

const iconMap = {
  orange: <FaDatabase />,
  green: <FaShieldAlt />,
  red: <FaExclamationTriangle />,
  blue: <FaCheckCircle />,
};

export default function StatCard({
  title,
  value,
  subtitle,
  color = "orange",
}) {
  return (
    <div className={`stat-card ${color}`}>
      <div className="stat-top">
        <div className="stat-icon">
          {iconMap[color]}
        </div>

        <span className="stat-badge">
          Live
        </span>
      </div>

      <div className="stat-content">
        <p className="stat-title">{title}</p>

        <h2 className="stat-value">{value}</h2>

        {subtitle && (
          <p className="stat-subtitle">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}