import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import AuthRoute from './components/AuthRoute';
import { setIsLoggedIn } from './redux/actions';
import { useEffect, useState } from 'react';
import Profile from './components/Profile/Profile';
function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
      dispatch(setIsLoggedIn(true));
    }
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<AuthRoute isLoggedIn={isLoggedIn} element={<Login />} />} />
          <Route path="/dashboard" element={<PrivateRoute Component={Dashboard} isLoggedIn={isLoggedIn} />} />
          <Route path="/profile" element={<PrivateRoute Component={Profile} isLoggedIn={isLoggedIn} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
