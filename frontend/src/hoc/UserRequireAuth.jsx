import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const UserRequireAuth = ({ children }) => {
  const isAuth = useSelector((store) => store.loginAuth.isAuth);
  const { pathname } = useLocation();
  if (isAuth) {
    return children;
  } else {
    return (
      // Redirecting to Login page
      <Navigate
        to="/login"
        state={{ from: pathname }}
        replace
        // spacer
      />
    );
  }
};

export default UserRequireAuth;