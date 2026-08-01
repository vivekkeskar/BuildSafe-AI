import "./Navbar.css";
import { ShieldCheck, Wifi } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">

        <ShieldCheck size={34} />

        <div>
          <h2>BuildSafe AI</h2>
          <p>Construction Safety Inspection</p>
        </div>

      </div>

      <div className="status">

        <Wifi size={18} />

        <span>AI Online</span>

      </div>

    </nav>
  );
}