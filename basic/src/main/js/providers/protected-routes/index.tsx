import { Navigate } from "react-router-dom";
import { useAuth } from "../auth";

interface IProps {
  children: JSX.Element;
}

export const ProtectedRoute = (props: IProps) => {
  const { children } = props;
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};
