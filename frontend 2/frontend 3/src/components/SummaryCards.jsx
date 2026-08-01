import "./SummaryCards.css";
import {
  ShieldCheck,
  AlertTriangle,
  HardHat,
  Activity,
} from "lucide-react";

export default function SummaryCards({
  compliance,
  detected,
  missing,
  risk,
}) {
  return (
    <div className="summary-grid">

      <div className="summary-card compliance">

        <div className="icon">
          <ShieldCheck size={34} />
        </div>

        <h4>Compliance</h4>

        <h2>{compliance}%</h2>

      </div>

      <div className="summary-card detected">

        <div className="icon">
          <HardHat size={34} />
        </div>

        <h4>Detected PPE</h4>

        <h2>{detected}</h2>

      </div>

      <div className="summary-card missing">

        <div className="icon">
          <AlertTriangle size={34} />
        </div>

        <h4>Missing PPE</h4>

        <h2>{missing}</h2>

      </div>

      <div className="summary-card risk">

        <div className="icon">
          <Activity size={34} />
        </div>

        <h4>Risk Level</h4>

        <h2>{risk}</h2>

      </div>

    </div>
  );
}