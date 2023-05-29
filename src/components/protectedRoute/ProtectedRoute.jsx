import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectUserName } from "../../features/user/userSlice";

const ProtectedRoute = ({ children }) => {
  const user = useSelector(selectUserName);
  let location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  console.log(user);

  return children;
};

export default ProtectedRoute;
