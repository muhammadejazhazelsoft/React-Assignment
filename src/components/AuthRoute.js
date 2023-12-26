import React from 'react'
import { Navigate } from 'react-router-dom';
const AuthRoute = ({ element,isLoggedIn}) => {
    return (
      isLoggedIn ? <Navigate to="/dashboard" replace /> : element
    );
  };

export default AuthRoute