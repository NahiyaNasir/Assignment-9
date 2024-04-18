/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location.pathname);
  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default ProtectedRoute;
