import { ArrowRight, ScanSearch, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero section-container">
      <div className="hero-copy">
        <div className="eyebrow"><span className="pulse-dot" /> DevSecOps Security Platform</div>
        <h1>Container &amp; Kubernetes <span>Security Scanner</span></h1>
        <p>
          Detect vulnerabilities, analyze configurations, understand risk, and receive
          actionable remediation guidance across the cloud-native application lifecycle.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" to="/auth">
            Start Security Scan <ArrowRight size={18} />
          </Link>
          <a className="button button-secondary" href="#workflow">
            Explore Workflow
          </a>
        </div>
        <div className="hero-proof">
          <span><ShieldCheck size={17} /> Detect</span>
          <span><ScanSearch size={17} /> Analyze</span>
          <span>AI-assisted remediation</span>
        </div>
      </div>

      <div className="hero-visual">
        <div className="scanner-orbit orbit-one" />
        <div className="scanner-orbit orbit-two" />
        <div className="scanner-core">
          <ShieldCheck size={58} />
          <strong>Security</strong>
          <small>Multi-layer analysis</small>
        </div>
        <div className="floating-card floating-top">
          <span className="mini-icon">✓</span>
          <div><strong>Trivy</strong><small>Image scan complete</small></div>
        </div>
        <div className="floating-card floating-bottom">
          <span className="mini-icon">AI</span>
          <div><strong>AI Analysis</strong><small>Remediation ready</small></div>
        </div>
      </div>
    </section>
  );
}