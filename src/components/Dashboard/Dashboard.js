import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Dashboard.css'
import { useNavigate } from 'react-router-dom';
import Sidebar from './SideBar';
import DashboardContent from './DashboardContent';
import ProfileContent from './ProfileContent';
const Dashboard = () => {
    const [selectedComponent, setSelectedComponent] = useState('dashboard'); // Default component
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const LoggedIn = useSelector(state => state.UserRegister.LoggedIn);
    const handleSidebarItemClick = (componentName) => {
        setSelectedComponent(componentName);
      };
    useEffect(() => {
        // const user = JSON.parse(localStorage.getItem('userData'));
        if (!LoggedIn) {
            navigate('/');
        }
    }, [LoggedIn])
    const renderContent = () => {
        switch (selectedComponent) {
            case 'dashboard':
                return <DashboardContent />;
            case 'profile':
                return <ProfileContent />;
            default:
                return <DashboardContent />; 
        }
    };
    return (
        <div className='LandingPage'>
            <div className="SideBar">
                <Sidebar onItemClick={handleSidebarItemClick} />
            </div>
            <div className="main-content">
                {renderContent()}
            </div>
            {/* <button onClick={handleResetButtonClick}>remove</button> */}
        </div>
    )
}

export default Dashboard