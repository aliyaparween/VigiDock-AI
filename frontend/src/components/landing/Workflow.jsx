import { ArrowDown, BrainCircuit, ChartNoAxesCombined, FileSearch, GitBranch, ShieldCheck, Wrench } from "lucide-react";

const steps = [
  ["01", "Input", "Docker Image, Dockerfile or Kubernetes Manifest", FileSearch],
  ["02", "Security Scanning", "Trivy, Kubescape and security rules", ShieldCheck],
  ["03", "Runtime Monitoring", "Falco-based runtime event monitoring", ChartNoAxesCombined],
  ["04", "Finding Collection", "Collect and normalize vulnerabilities, misconfigurations and events", LayersIcon],
  ["05", "Risk Assessment", "Prioritize using severity, impact and affected component", ChartNoAxesCombined],
  ["06", "AI Analysis", "Explain findings and provide context-aware reasoning", BrainCircuit],
  ["07", "Remediation", "Generate actionable security recommendations", Wrench],
  ["08", "Dashboard & CI/CD", "Centralized reports and security feedback in the delivery pipeline", GitBranch],
];

function LayersIcon(props) {
  return <span className="layers-placeholder">◈</span>;
}

export default function Workflow() {
  return (
    <section className="section section-alt" id="workflow">
      <div className="section-container">
        <div className="section-heading center">
          <div className="eyebrow">HOW IT WORKS</div>
          <h2>From <span>detection</span> to remediation.</h2>
          <p>The workflow follows the eight phases described in the proposed security framework.</p>
        </div>

        <div className="workflow-grid">
          {steps.map(([number, title, text, Icon], index) => (
            <article className="workflow-card" key={number}>
              <div className="workflow-number">{number}</div>
              <div className="workflow-icon"><Icon size={21} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
              {index < steps.length - 1 && <ArrowDown className="workflow-arrow" size={18} />}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}