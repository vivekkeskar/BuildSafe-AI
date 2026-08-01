import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import UploadCard from "./components/UploadCard";
import ResultCard from "./components/ResultCard";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      <UploadCard />

      <ResultCard />

      <Footer />
    </div>
  );
}