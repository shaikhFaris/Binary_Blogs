import { useLocation, Navigate, Outlet, Form, replace } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();
  return auth?.email ? (
    <Outlet /> // It refers to child components
  ) : (
    <Navigate to="/login" state={{ Form: location }} replace />
  );
};

export default RequireAuth;
