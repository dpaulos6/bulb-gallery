import React from "react";

const AuthCheck = () => {
  const isLoggedIn = () => {
    const token = localStorage.getItem("authToken");
    return !!token;
  };

  return isLoggedIn();
};

export default AuthCheck;
