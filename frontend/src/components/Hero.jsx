import { motion } from "framer-motion";
import {
  FaHardHat,
  FaShieldAlt,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[65vh] max-w-7xl flex-col items-center justify-between gap-10 px-6 py-12 md:flex-row">

      {/* Left Section */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-400">
          🚀 Powered by Google Gemini Vision
        </span>

        <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white md:text-7xl">
          AI Powered <br />

          <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
            Construction Safety
          </span>
        </h1>

        <p className="mt-5 max-w-xl text-lg leading-8 text-slate-400">
          Upload construction site images and instantly detect PPE
          violations using Google Gemini Vision AI. Generate
          compliance reports in seconds.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">

          <a
            href="#upload"
            className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-orange-600"
          >
            Upload Image
          </a>

          <a
            href="https://github.com/vivekkeskar/BuildSafe-AI"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-white backdrop-blur-lg transition duration-300 hover:scale-105 hover:bg-white/10"
          >
            GitHub
            <FaArrowRight />
          </a>

        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 max-w-md">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:scale-105">

            <FaHardHat className="mb-3 text-3xl text-orange-400" />

            <p className="font-semibold text-white">
              Helmet Detection
            </p>

            <span className="text-sm text-slate-400">
              AI Vision
            </span>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:scale-105">

            <FaShieldAlt className="mb-3 text-3xl text-green-400" />

            <p className="font-semibold text-white">
              PPE Compliance
            </p>

            <span className="text-sm text-slate-400">
              Smart Detection
            </span>

          </div>

        </div>

      </motion.div>

      {/* Right Section */}

      <motion.div
        className="flex flex-1 justify-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        <div className="relative flex h-[360px] w-[360px] items-center justify-center">

          <div className="absolute h-72 w-72 rounded-full bg-orange-500/20 blur-3xl"></div>

          <div className="relative flex h-[320px] w-[320px] flex-col items-center justify-center rounded-3xl border border-orange-500/30 bg-white/5 backdrop-blur-xl shadow-2xl">

            <div className="text-7xl">
              👷
            </div>

            <h2 className="mt-5 text-3xl font-bold text-white">
              AI Safety Inspection
            </h2>

            <p className="mt-3 text-center text-slate-400">
              Detect Helmet, Vest,
              <br />
              Gloves, Boots & PPE
            </p>

            <div className="mt-6 flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 text-green-400">

              <FaCheckCircle />

              <span className="text-sm font-medium">
                Real-Time AI Analysis
              </span>

            </div>

          </div>

        </div>

      </motion.div>

    </section>
  );
}