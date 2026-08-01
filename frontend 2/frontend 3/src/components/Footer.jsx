import { ShieldCheck } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-slate-950 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 text-center">
        <div className="flex items-center gap-2">
          <ShieldCheck className="text-orange-500" size={28} />
          <h2 className="text-2xl font-bold text-white">BuildSafe AI</h2>
        </div>

        <p className="max-w-xl text-gray-400">
          AI Powered Construction Safety Inspection using Google Gemini Vision.
        </p>

        <div className="flex gap-5 text-2xl text-gray-300">
          <FaGithub className="cursor-pointer hover:text-orange-500 transition" />
          <FaLinkedin className="cursor-pointer hover:text-orange-500 transition" />
        </div>

        <p className="text-sm text-gray-500">
          © 2026 BuildSafe AI • Made for IdeaToImpact Hackathon
        </p>
      </div>
    </footer>
  );
}