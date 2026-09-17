import { BrainCircuit, Layers3, ShieldAlert, Wrench } from "lucide-react";

const features = [
  {
    icon: Layers3,
    title: "Multi-layer security",
    text: "Bring container, Dockerfile, Kubernetes and runtime findings into one security workflow."
  },
  {
    icon: ShieldAlert,
    title: "Risk prioritization",
    text: "Organize findings using severity, potential impact and affected components."
  },
  {
    icon: BrainCircuit,
    title: "AI-assisted analysis",
    text: "Turn technical security findings into developer-friendly explanations and contextual guidance."
  },
  {
    icon: Wrench,
    title: "Actionable remediation",
    text: "Provide practical recommendations for patching, configuration hardening and suspicious behavior."
  }
];

export default function About() {
  return (
    <section className="section section-container" id="about">
      <div className="section-heading">
        <div className="eyebrow">WHY THIS PLATFORM</div>
        <h2>Security findings should lead to <span>clear action.</span></h2>
        <p>
          Traditional security workflows can leave developers with separate reports,
          technical findings and large volumes of alerts. This platform is designed to
          bring those layers together in a centralized workflow.
        </p>
      </div>

      <div className="feature-grid">
        {features.map(({ icon: Icon, title, text }) => (
          <article className="feature-card" key={title}>
            <div className="feature-icon"><Icon size={22} /></div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}