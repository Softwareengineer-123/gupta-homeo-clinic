import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedAdmin = localStorage.getItem("admin");
    const token = localStorage.getItem("token");

    if (storedAdmin && token) {
      setAdmin(JSON.parse(storedAdmin));
    }

    setLoading(false);
  }, []);

  const login = (adminData, token) => {
    localStorage.setItem("admin", JSON.stringify(adminData));
    localStorage.setItem("token", token);

    setAdmin(adminData);
  };

  const logout = () => {
    localStorage.removeItem("admin");
    localStorage.removeItem("token");

    setAdmin(null);
  };

  return (
    <AuthContext.Provider
      value={{
        admin,
        login,
        logout,
        loading,
        isAuthenticated: !!admin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}