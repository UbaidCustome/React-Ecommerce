import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AdminAuth } from "../context/AdminAuth";
export const AdminRequireAuth = ({ children }) => {
    const { user } = useContext(AdminAuth);
    if(!user) {
        return <Navigate to="/admin/login" />
    }
    return children;
}