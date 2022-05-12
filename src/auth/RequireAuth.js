import React from "react";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {

  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }
  return children;
};

const LoginAuth = ({ children }) => {

  if (localStorage.getItem("token")) {
    return <Navigate to="/" />;
  }
  return children;
};

export {RequireAuth, LoginAuth};
