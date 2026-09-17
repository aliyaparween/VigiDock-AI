import { Github, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="brand footer-brand">
          <span className="brand-icon"><ShieldCheck size={18} /></span>
          <span>Security<span>Scanner</span></span>
        </div>
        <p>Integrated security analysis for containerized and Kubernetes workloads.</p>
      </div>
      <div className="footer-right">
        <a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
        <span>© 2026 Security Scanner</span>
      </div>
    </footer>
  );
}