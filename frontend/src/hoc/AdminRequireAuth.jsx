import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const AdminRequireAuth = ({ children }) => {
  const isAuth = useSelector((store) => store.adminAuth.isAuth);
  const { pathname } = useLocation();

  if (isAuth) {
    return children;
  } else {
    return (
      // Redirecting to Login page
      <Navigate
        to="/admin-login"
        state={{ from: pathname }}
        replace
        // spacer
      />
    );
  }
};

export default AdminRequireAuth;
