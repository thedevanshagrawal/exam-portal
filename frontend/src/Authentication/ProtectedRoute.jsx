import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function ProtectedRoute({ element }) {
  const { isAuthenticated } = useAuth();
  // console.log("ProtectedRoute: isAuthenticated = ", isAuthenticated);
  

  return isAuthenticated ? element : <Navigate to="/" />;
}

export default ProtectedRoute;
