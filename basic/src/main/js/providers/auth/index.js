import { jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../localStorage/index";
const AuthContext = createContext({});
const AuthProvider = (props) => {
    const { children } = props;
    const [user, setUser] = useLocalStorage({ keyname: "user" });
    const navigate = useNavigate();
    const login = async (data) => {
        setUser(data);
        navigate("/profile");
    };
    const logout = () => {
        setUser(null);
        navigate("/", { replace: true });
    };
    const value = useMemo(() => ({ user, login, logout }), [user]);
    return _jsxs(AuthContext.Provider, { value: value, children: [" ", children] });
};
export const useAuth = () => {
    return useContext(AuthContext);
};
export default AuthProvider;
