import { jsx as _jsx } from "react/jsx-runtime";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../../providers/auth";
const ProtectedLayout = (props) => {
    const { children } = props;
    const { user } = useAuth();
    if (!user) {
        return _jsx(Navigate, { to: "/login" });
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
