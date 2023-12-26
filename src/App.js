
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import NotFound from './components/NotFound/NotFound';

import AuthRoute from './components/AuthRoute';
function App() {

  const tasks = useSelector((state) => state.tasks);
  const isLoggedIn  = useSelector((state) => state.isLoggedIn);
  // const isLoggedIn = useSelector(state => state.UserRegister.isLoggedIn);
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<AuthRoute isLoggedIn={isLoggedIn} element={<Login />} />} />
          <Route path="/dashboard" element={<PrivateRoute Component={Dashboard} isLoggedIn={isLoggedIn} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
