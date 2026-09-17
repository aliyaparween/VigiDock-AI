import { useRef, useState } from "react";
import { CloudUpload, FileCode2, Image, Play, ShieldCheck, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const types = [
  { value: "container", label: "Container Image", icon: Image, hint: "e.g. nginx:latest" },
  { value: "dockerfile", label: "Dockerfile", icon: FileCode2, hint: "Upload Dockerfile" },
  { value: "kubernetes", label: "Kubernetes Manifest", icon: FileCode2, hint: "Upload YAML / manifest" },
];

export default function UploadScanner() {
  const [type, setType] = useState("container");
  const [target, setTarget] = useState("");
  const [file, setFile] = useState(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const selected = types.find((item) => item.value === type);

  const onFile = (event) => {
    const picked = event.target.files?.[0];
    if (picked) {
      setFile(picked);
      setTarget(picked.name);
    }
  };

  const start = () => {
    const scan = {
      id: `SCN-${Math.floor(1000 + Math.random() * 8999)}`,
      target: target || file?.name || "New scan",
      type: selected.label,
      status: "Queued",
    };
    sessionStorage.setItem("pending_scan", JSON.stringify(scan));
    navigate("/dashboard");
  };

  return (
    <section className="section section-container" id="scan">
      <div className="scan-panel">
        <div className="scan-panel-copy">
          <div className="eyebrow">START A SCAN</div>
          <h2>Check your workload before it reaches production.</h2>
          <p>
            Choose the security artifact you want to analyze. Container images can be
            referenced by image name; Dockerfiles and Kubernetes manifests can be uploaded.
          </p>
          <div className="supported-row">
            <span><ShieldCheck size={15} /> Trivy</span>
            <span><ShieldCheck size={15} /> Kubescape</span>
            <span><ShieldCheck size={15} /> Falco</span>
          </div>
        </div>

        <div className="scan-form">
          <label>Scan type</label>
          <div className="type-tabs">
            {types.map(({ value, label, icon: Icon }) => (
              <button
                key={value}
                className={type === value ? "type-tab active" : "type-tab"}
                onClick={() => { setType(value); setFile(null); setTarget(""); }}
              >
                <Icon size={17} /> {label}
              </button>
            ))}
          </div>

          {type === "container" ? (
            <>
              <label htmlFor="target">Container image</label>
              <input
                id="target"
                className="input"
                placeholder={selected.hint}
                value={target}
                onChange={(e) => setTarget(e.target.value)}
              />
            </>
          ) : (
            <>
              <label>Security artifact</label>
              <button className="dropzone" onClick={() => inputRef.current?.click()}>
                <CloudUpload size={30} />
                {file ? (
                  <>
                    <strong>{file.name}</strong>
                    <small>{(file.size / 1024).toFixed(1)} KB</small>
                  </>
                ) : (
                  <>
                    <strong>Choose a file to scan</strong>
                    <small>or drag and drop it here</small>
                  </>
                )}
              </button>
              <input ref={inputRef} type="file" hidden accept={type === "kubernetes" ? ".yaml,.yml,.json" : "*"} onChange={onFile} />
            </>
          )}

          {(file || target) && (
            <button className="clear-file" onClick={() => { setFile(null); setTarget(""); }}>
              <X size={14} /> Clear selection
            </button>
          )}

          <button className="button button-primary scan-submit" onClick={start}>
            <Play size={17} /> Start Security Scan
          </button>
        </div>
      </div>
    </section>
  );
}