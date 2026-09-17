import { useState } from "react";
import { ArrowLeft, Eye, EyeOff, ShieldCheck } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Auth() {
  const [mode, setMode] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const { login, signup } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const submit = (e) => {
    e.preventDefault();
    setError("");
    const result = mode === "login"
      ? login(form.email, form.password)
      : signup(form.name, form.email, form.password);

    if (!result.ok) return setError(result.message);
    navigate(location.state?.from || "/dashboard");
  };

  return (
    <div className="auth-page">
      <div className="auth-decoration">
        <div className="auth-grid" />
        <div className="auth-copy">
          <Link to="/" className="brand">
            <span className="brand-icon"><ShieldCheck size={20} /></span>
            <span>Security<span>Scanner</span></span>
          </Link>
          <div>
            <div className="eyebrow">SECURE YOUR CLOUD-NATIVE STACK</div>
            <h1>Detect. Analyze.<br /><span>Remediate.</span></h1>
            <p>One workflow for container, Kubernetes and runtime security findings.</p>
          </div>
          <small>DevSecOps security analysis platform</small>
        </div>
      </div>

      <div className="auth-panel">
        <Link to="/" className="back-link"><ArrowLeft size={16} /> Back to home</Link>
        <div className="auth-card">
          <div className="auth-tabs">
            <button className={mode === "login" ? "auth-tab active" : "auth-tab"} onClick={() => { setMode("login"); setError(""); }}>Login</button>
            <button className={mode === "signup" ? "auth-tab active" : "auth-tab"} onClick={() => { setMode("signup"); setError(""); }}>Sign up</button>
          </div>
          <div className="auth-heading">
            <h2>{mode === "login" ? "Welcome back" : "Create your account"}</h2>
            <p>{mode === "login" ? "Sign in to access your security dashboard." : "Create an account to manage your scans and reports."}</p>
          </div>

          <form onSubmit={submit}>
            {mode === "signup" && (
              <>
                <label htmlFor="name">Full name</label>
                <input id="name" className="input" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </>
            )}
            <label htmlFor="email">Email address</label>
            <input id="email" className="input" type="email" placeholder="you@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />

            <label htmlFor="password">Password</label>
            <div className="password-wrap">
              <input id="password" className="input" type={showPassword ? "text" : "password"} placeholder="Enter your password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
              <button type="button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <EyeOff size={17} /> : <Eye size={17} />}</button>
            </div>

            {mode === "login" && <div className="form-row"><label className="checkbox"><input type="checkbox" /> Remember me</label><button type="button" className="text-button">Forgot password?</button></div>}
            {error && <div className="form-error">{error}</div>}

            <button className="button button-primary auth-submit">{mode === "login" ? "Login" : "Create account"}</button>
          </form>
        </div>
      </div>
    </div>
  );
}