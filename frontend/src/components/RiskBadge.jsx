export default function RiskBadge({ level, score }) {
  const getRiskStyle = () => {
    switch (level?.toLowerCase()) {
      case "low":
        return {
          bg: "bg-green-500/15",
          border: "border-green-500/30",
          text: "text-green-400",
          dot: "bg-green-400",
        };

      case "medium":
        return {
          bg: "bg-yellow-500/15",
          border: "border-yellow-500/30",
          text: "text-yellow-400",
          dot: "bg-yellow-400",
        };

      case "high":
        return {
          bg: "bg-red-500/15",
          border: "border-red-500/30",
          text: "text-red-400",
          dot: "bg-red-400",
        };

      default:
        return {
          bg: "bg-slate-500/15",
          border: "border-slate-500/30",
          text: "text-slate-300",
          dot: "bg-slate-300",
        };
    }
  };

  const style = getRiskStyle();

  return (
    <div
      className={`flex items-center justify-between rounded-2xl border ${style.border} ${style.bg} px-5 py-4`}
    >
      {/* Risk Level */}
      <div>
        <p className="text-xs uppercase tracking-wider text-slate-400">
          Risk Level
        </p>

        <div className="mt-2 flex items-center gap-2">
          <span
            className={`h-3 w-3 rounded-full ${style.dot}`}
          ></span>

          <span className={`text-lg font-bold ${style.text}`}>
            {level}
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-6 h-10 w-px bg-white/10"></div>

      {/* Score */}
      <div className="text-right">
        <p className="text-xs uppercase tracking-wider text-slate-400">
          Risk Score
        </p>

        <p className="mt-2 text-2xl font-extrabold text-white">
          {score}
          <span className="text-base text-slate-400"> /100</span>
        </p>
      </div>
    </div>
  );
}