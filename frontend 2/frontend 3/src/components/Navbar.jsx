import { motion } from "framer-motion";
import { ShieldCheck, Cpu } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="sticky top-0 z-50 mx-auto mt-6 flex w-[92%] max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl"
    >
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-orange-500 p-2">
          <ShieldCheck size={28} />
        </div>

        <div>
          <h1 className="text-xl font-bold">BuildSafe AI</h1>
          <p className="text-sm text-gray-400">
            Construction Safety Platform
          </p>
        </div>
      </div>

      <div className="hidden gap-10 text-gray-300 md:flex">
        <a href="#" className="transition hover:text-orange-400">
          Features
        </a>

        <a href="#" className="transition hover:text-orange-400">
          Dashboard
        </a>

        <a href="#" className="transition hover:text-orange-400">
          GitHub
        </a>
      </div>

      <div className="flex items-center gap-2 rounded-full bg-green-500/20 px-4 py-2 text-green-400">
        <Cpu size={18} />
        AI Online
      </div>
    </motion.nav>
  );
}