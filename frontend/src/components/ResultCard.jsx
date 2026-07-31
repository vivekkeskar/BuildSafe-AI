import { motion } from "framer-motion";
import { generatePDF } from "../utils/generatePDF";
import SummaryCards from "./SummaryCards";
import ProgressBar from "./ProgressBar";
import RiskBadge from "./RiskBadge";

export default function ResultCard({ result }) {
  if (!result) return null;

  const {
    inspectionType,
    compliance,
    detectedItems,
    missingItems,
    requiredItems,
    risk,
  } = result;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl shadow-2xl"
    >
      {/* Header */}
      <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-orange-400">
            AI Inspection Report
          </p>

          <h2 className="mt-2 text-4xl font-bold text-white">
            Construction Safety Report
          </h2>
        </div>

        <div className="flex flex-col gap-3 lg:items-end">
            <RiskBadge
                level={risk.level}
                score={risk.score}
            />

            <button
                onClick={() => generatePDF(result)}
                className="rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
                📄 Download PDF
            </button>
</div>
      </div>

      {/* Summary */}
      <SummaryCards
        compliance={compliance}
        detected={detectedItems.length}
        missing={missingItems.length}
        risk={risk.level}
      />

      {/* Progress */}
      <ProgressBar compliance={compliance} />

      {/* Inspection Type */}
      <div className="mt-8 rounded-2xl border border-white/10 bg-slate-800/50 px-6 py-4">
        <div className="flex items-center justify-between">
          <span className="text-slate-400">
            Inspection Type
          </span>

          <span className="rounded-full bg-orange-500/20 px-4 py-2 font-semibold capitalize text-orange-400">
            {inspectionType}
          </span>
        </div>
      </div>

      {/* PPE Cards */}
      <div className="mt-10 grid gap-6 lg:grid-cols-3">

        {/* Required */}
        <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-6">
          <h3 className="mb-5 text-xl font-bold text-blue-400">
            🦺 Required PPE
          </h3>

          <ul className="space-y-3">
            {requiredItems?.length ? (
              requiredItems.map((item, index) => (
                <li
                  key={index}
                  className="rounded-lg bg-slate-900/60 px-4 py-3 text-white"
                >
                  {item}
                </li>
              ))
            ) : (
              <p className="text-slate-400">
                No Data
              </p>
            )}
          </ul>
        </div>

        {/* Detected */}
        <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-6">
          <h3 className="mb-5 text-xl font-bold text-green-400">
            ✅ Detected PPE
          </h3>

          <ul className="space-y-3">
            {detectedItems.length ? (
              detectedItems.map((item, index) => (
                <li
                  key={index}
                  className="rounded-lg bg-slate-900/60 px-4 py-3 text-white"
                >
                  {item}
                </li>
              ))
            ) : (
              <p className="text-slate-400">
                No PPE Detected
              </p>
            )}
          </ul>
        </div>

        {/* Missing */}
        <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-6">
          <h3 className="mb-5 text-xl font-bold text-red-400">
            ❌ Missing PPE
          </h3>

          <ul className="space-y-3">
            {missingItems.length ? (
              missingItems.map((item, index) => (
                <li
                  key={index}
                  className="rounded-lg bg-slate-900/60 px-4 py-3 text-white"
                >
                  {item}
                </li>
              ))
            ) : (
              <p className="text-slate-400">
                No Missing PPE 🎉
              </p>
            )}
          </ul>
        </div>

      </div>
    </motion.div>
  );
}