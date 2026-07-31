import { ShieldCheck } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-slate-950 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-6 text-center">

        <div className="flex items-center gap-3">
          <ShieldCheck className="text-orange-500" size={30} />
          <h2 className="text-2xl font-bold text-white">
            BuildSafe AI
          </h2>
        </div>

        <p className="max-w-xl text-gray-400">
          AI Powered Construction Safety Inspection using Google Gemini Vision.
          Detect PPE compliance, identify missing equipment and improve
          construction site safety in seconds.
        </p>

        <div className="flex gap-6 text-2xl">

          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 transition hover:text-orange-500"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 transition hover:text-orange-500"
          >
            <FaLinkedin />
          </a>

        </div>

        <div className="h-px w-60 bg-white/10"></div>

        <p className="text-sm text-gray-500">
          © 2026 BuildSafe AI • Built for IdeaToImpact Hackathon
        </p>

      </div>
    </footer>
  );
}