import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios";


export type User = { id: number; email: string; name: string } | null;


interface AuthContextType {
user: User;
loading: boolean;
signin: (email: string, password: string) => Promise<void>;
signup: (name: string, email: string, password: string) => Promise<void>;
signout: () => Promise<void>;
}


const AuthContext = createContext<AuthContextType | undefined>(undefined);


export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
const [user, setUser] = useState<User>(null);
const [loading, setLoading] = useState(true);


useEffect(() => {
api.get("/me")
.then(res => setUser(res.data))
.catch(() => setUser(null))
.finally(() => setLoading(false));
}, []);


const signin = async (email: string, password: string) => {
await api.post("/auth/signin", { email, password });
const me = await api.get("/me");
setUser(me.data);
};


const signup = async (name: string, email: string, password: string) => {
await api.post("/auth/signup", { name, email, password });
await signin(email, password);
};


const signout = async () => {
await api.post("/auth/signout");
setUser(null);
};


return (
<AuthContext.Provider value={{ user, loading, signin, signup, signout }}>
{children}
</AuthContext.Provider>
);
};


export const useAuth = () => {
const ctx = useContext(AuthContext);
if (!ctx) throw new Error("useAuth")
}