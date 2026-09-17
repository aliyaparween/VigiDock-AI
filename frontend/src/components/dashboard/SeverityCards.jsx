import { AlertTriangle, Bug, CircleAlert, ShieldCheck } from "lucide-react";

const cards = [
  ["Critical", "3", "critical", CircleAlert],
  ["High", "14", "high", AlertTriangle],
  ["Medium", "38", "medium", Bug],
  ["Low", "52", "low", ShieldCheck],
];

export default function SeverityCards() {
  return (
    <div className="severity-grid">
      {cards.map(([label, value, tone, Icon]) => (
        <div className="severity-card" key={label}>
          <div className={`severity-icon ${tone}`}><Icon size={20} /></div>
          <div><span>{label}</span><strong>{value}</strong></div>
          <small>Findings</small>
        </div>
      ))}
    </div>
  );
}