import { Navigate } from "react-router-dom";
import { useAuth } from "../../../providers/auth";

interface IProps {
  children: JSX.Element;
}

const ProtectedLayout = (props: IProps) => {
  const { children } = props;
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  //   sample code for use later
  //    return (
  //      <div>
  //        <nav>
  //          <Link to="/settings">Settings</Link>
  //          <Link to="/profile">Profile</Link>
  //        </nav>
  //        <Outlet />
  //      </div>
  //    );
  return children;
};

export default ProtectedLayout;
