import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../ContextApi/AuthContext";

export const Privateroutes = ({ children }) => {
  const { isAuth } = useContext(AuthContext);

  if (!isAuth) {
    alert("Please login first");
    return <Navigate to="/" />;
  }
  return children;
};
