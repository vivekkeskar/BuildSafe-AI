import { motion } from "framer-motion";
import { ShieldCheck, Cpu } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-4 z-50 mx-auto flex w-[95%] max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 px-6 py-4 backdrop-blur-xl shadow-2xl"
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg">
          <ShieldCheck size={26} className="text-white" />
        </div>

        <div>
          <h1 className="text-2xl font-bold text-white">
            BuildSafe AI
          </h1>

          <p className="text-sm text-slate-400">
            AI Construction Safety Inspection
          </p>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="hidden items-center gap-8 md:flex">
        <a
          href="#"
          className="font-medium text-slate-300 transition duration-300 hover:text-orange-400"
        >
          Home
        </a>

        <a
          href="#upload"
          className="font-medium text-slate-300 transition duration-300 hover:text-orange-400"
        >
          Upload
        </a>

        <a
          href="#results"
          className="font-medium text-slate-300 transition duration-300 hover:text-orange-400"
        >
          Results
        </a>

        <a
          href="https://github.com/vivekkeskar/BuildSafe-AI"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-slate-300 transition duration-300 hover:text-orange-400"
        >
          GitHub
        </a>
      </div>

      {/* AI Status */}
      <div className="hidden items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-green-400 md:flex">
        <Cpu size={18} />
        <span className="text-sm font-semibold">
          AI Online
        </span>
      </div>
    </motion.nav>
  );
}