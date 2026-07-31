export default function ProgressBar({ compliance }) {
  return (
    <div className="mt-8">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-300">
          Safety Compliance
        </span>

        <span className="text-lg font-bold text-orange-400">
          {compliance}%
        </span>
      </div>

      <div className="h-4 w-full overflow-hidden rounded-full bg-slate-800">
        <div
          className="flex h-full items-center justify-end rounded-full bg-gradient-to-r from-orange-500 via-yellow-400 to-green-500 pr-2 transition-all duration-700"
          style={{ width: `${compliance}%` }}
        >
          {compliance >= 20 && (
            <span className="text-xs font-semibold text-white">
              {compliance}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
}