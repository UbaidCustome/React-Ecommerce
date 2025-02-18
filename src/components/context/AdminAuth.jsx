import { createContext, useState } from "react";

export const AdminAuth = createContext();

export const AdminAuthProvider = ({ children }) => {
    const token = localStorage.getItem('admin');
    const [user, setUser] = useState(token);
    const login = (data) => {
        setUser(data);
        localStorage.setItem('admin', data);
    }
    const logout = () => {
        localStorage.removeItem('admin');
        setUser(null);
    }
    return (
        <AdminAuth.Provider value={{ user, login, logout }}>
            {children}
        </AdminAuth.Provider>
    )
}