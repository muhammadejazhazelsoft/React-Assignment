import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ Component, isLoggedIn }) => {
  return isLoggedIn ? <Component /> : <Navigate to="/" />;
};

export default PrivateRoute;
