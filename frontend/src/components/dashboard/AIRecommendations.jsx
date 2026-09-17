import { ArrowRight, BrainCircuit, CheckCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function AIRecommendations() {
  return (
    <div className="ai-card">
      <div className="ai-title">
        <div className="ai-icon"><BrainCircuit size={23} /></div>
        <div><span className="eyebrow">AI SECURITY ANALYZER</span><h3>Recommended next steps</h3></div>
      </div>
      <p>Prioritized findings have been translated into developer-friendly remediation guidance.</p>
      <ul>
        <li><CheckCheck size={17} /> Patch vulnerable packages in the affected image.</li>
        <li><CheckCheck size={17} /> Restrict excessive Kubernetes container privileges.</li>
        <li><CheckCheck size={17} /> Review RBAC and workload security contexts.</li>
      </ul>
      <Link className="ai-link" to="/scans/SCN-1024">Review findings <ArrowRight size={16} /></Link>
    </div>
  );
}