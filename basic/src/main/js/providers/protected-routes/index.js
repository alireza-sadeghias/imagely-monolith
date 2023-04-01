import { jsx as _jsx } from "react/jsx-runtime";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth";
export const ProtectedRoute = (props) => {
    const { children } = props;
    const { user } = useAuth();
    if (!user) {
        return _jsx(Navigate, { to: "/login" });
    }
    return children;
};
