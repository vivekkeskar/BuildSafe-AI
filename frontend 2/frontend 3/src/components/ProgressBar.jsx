import "./ProgressBar.css";

export default function ProgressBar({ compliance }) {
  return (
    <div className="progress-wrapper">

      <div className="progress-header">

        <span>Safety Compliance</span>

        <span>{compliance}%</span>

      </div>

      <div className="progress-track">

        <div
          className="progress-fill"
          style={{ width: `${compliance}%` }}
        ></div>

      </div>

    </div>
  );
}