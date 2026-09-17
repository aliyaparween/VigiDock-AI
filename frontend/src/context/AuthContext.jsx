import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("scanner_user");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) localStorage.setItem("scanner_user", JSON.stringify(user));
    else localStorage.removeItem("scanner_user");
  }, [user]);

  const login = (email, password) => {
    if (!email || !password) return { ok: false, message: "Enter your email and password." };
    const saved = JSON.parse(localStorage.getItem("scanner_user") || "null");
    const nextUser = saved?.email === email ? saved : { name: email.split("@")[0], email };
    setUser(nextUser);
    return { ok: true };
  };

  const signup = (name, email, password) => {
    if (!name || !email || !password) {
      return { ok: false, message: "Please complete all required fields." };
    }
    const nextUser = { name, email };
    localStorage.setItem("scanner_user", JSON.stringify(nextUser));
    setUser(nextUser);
    return { ok: true };
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}