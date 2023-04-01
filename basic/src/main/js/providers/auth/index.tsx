import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../localStorage/index";

const AuthContext = createContext({} as IAuth);

interface IProps {
  children?: React.ReactNode;
}
interface IAuth {
  user: {};
}

const AuthProvider = (props: IProps) => {
  const { children } = props;
  const [user, setUser] = useLocalStorage({ keyname: "user" });
  const navigate = useNavigate();

  const login = async (data: any) => {
    setUser(data);
    navigate("/profile");
  };

  const logout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  const value = useMemo(() => ({ user, login, logout }), [user]);
  return <AuthContext.Provider value={value}> {children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
