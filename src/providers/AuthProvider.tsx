import { createContext, useContext, useState } from "react";
import type { User } from "../types/author";

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextType | null>(null);

const defaultIsAuthenticated = Boolean(localStorage.getItem("token")) || false;

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    defaultIsAuthenticated
  );
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, setIsAuthenticated, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);

  if (!ctx) {
    throw new Error(
      "useAuth has to be used within <AuthProvider></AuthProvider>"
    );
  }

  return ctx;
};
