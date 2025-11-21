import { createContext, useContext, useEffect, useState } from "react";
import type { User } from "../types/author";
import axios from "axios";

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

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

   useEffect(() => {
     const token = localStorage.getItem("token");
     const userId = localStorage.getItem("userId");

     if (token && userId) {
       axios
         .get(`http://localhost:5501/api/author/${userId}`, {
           headers: { Authorization: `Bearer ${token}` },
         })
         .then((res) => {
           if (res.data?.author) {
             setUser(res.data.author);
             setIsAuthenticated(true);
           } else {
             setUser(null);
             setIsAuthenticated(false);
           }
         })
         .catch(() => {
           localStorage.removeItem("token");
           localStorage.removeItem("userId");
           setUser(null);
           setIsAuthenticated(false);
         })
         .finally(() => setLoading(false));
     } else {
       setLoading(false);
     }
   }, []);
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, setIsAuthenticated, setUser }}
    >
      {loading ? <div>Loading...</div> : children}
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
