import { LayoutDashboard, LogIn, LogOut, ShieldCheck, UserRound } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Navbar({ transparent = false }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className={`navbar ${transparent ? "navbar-transparent" : ""}`}>
      <Link to="/" className="brand">
        <span className="brand-icon"><ShieldCheck size={20} /></span>
        <span>Security<span>Scanner</span></span>
      </Link>

      <nav className="nav-actions">
        {user ? (
          <>
            <Link className="nav-button nav-button-muted" to="/dashboard">
              <LayoutDashboard size={17} /> Dashboard
            </Link>
            <button className="nav-button nav-button-muted" onClick={handleLogout}>
              <LogOut size={17} /> Logout
            </button>
            <div className="user-chip">
              <UserRound size={16} />
              <span>{user.name}</span>
            </div>
          </>
        ) : (
          <>
            <Link className="nav-button nav-button-muted" to="/dashboard">Dashboard</Link>
            <Link className="nav-button nav-button-primary" to="/auth">
              <LogIn size={17} /> Login / Sign up
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}