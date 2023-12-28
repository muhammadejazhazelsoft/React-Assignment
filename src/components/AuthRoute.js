import React from 'react'
import { Navigate } from 'react-router-dom';
const AuthRoute = ({ element, isLoggedIn }) => {
  const location = localStorage.getItem('url')
  return (
    isLoggedIn ? <Navigate to={location || "/dashboard"} replace /> : element
  );
};

export default AuthRoute