import React from 'react';
import { Navigate } from 'react-router-dom';
import MainDashboard from './Dashboard/MainDashboard/MainDashboard';

const PrivateRoute = ({ Component, isLoggedIn }) => {
  return isLoggedIn ? <MainDashboard Component={Component} /> : <Navigate to="/" />;
};

export default PrivateRoute;
