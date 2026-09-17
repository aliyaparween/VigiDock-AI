import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/landing/Hero";
import About from "../components/landing/About";
import Workflow from "../components/landing/Workflow";
import UploadScanner from "../components/landing/UploadScanner";

export default function Home() {
  return (
    <div className="site-shell">
      <Navbar transparent />
      <main>
        <Hero />
        <About />
        <Workflow />
        <UploadScanner />
      </main>
      <Footer />
    </div>
  );
}