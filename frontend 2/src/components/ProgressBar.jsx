import "./ProgressBar.css";

export default function ProgressBar({ value }) {
  return (
    <div className="progress-wrapper">
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${value}%` }}
        ></div>
      </div>

      <span className="progress-text">{value}%</span>
    </div>
  );
}