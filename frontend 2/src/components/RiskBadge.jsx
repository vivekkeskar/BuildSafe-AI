import "./RiskBadge.css";

export default function RiskBadge({ risk }) {

    const level = risk.level.toLowerCase();

    return (
        <div className={`risk ${level}`}>
            {risk.level} Risk
        </div>
    );

}