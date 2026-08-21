import { createContext, useState, useEffect, ReactNode } from "react";
import { authService } from "@/services/authService";
import { SignupPayload } from "@/types/auth";

interface User {
  id: string;
  name: string;
  email: string;
}


interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (payload: SignupPayload) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Restore session on refresh
  useEffect(() => {
    const token = authService.getAccessToken();
    const userData = localStorage.getItem("user");

    if (token && userData) {
      setUser(JSON.parse(userData));
    }

    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const data = await authService.login(email, password);

    localStorage.setItem("user", JSON.stringify(data.user));
    setUser(data.user);
  };

const signup = async (payload: SignupPayload) => {
  const data = await authService.signup(payload);

  localStorage.setItem("user", JSON.stringify(data.user));
  setUser(data.user);
};

  const logout = () => {
    authService.logout();
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
