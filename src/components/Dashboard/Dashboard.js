import React, { useState } from 'react'
import './Dashboard.css'
import Sidebar from './SideBar';
import DashboardContent from './DashboardContent';
import ProfileContent from './ProfileContent';
const Dashboard = () => {
    const [selectedComponent, setSelectedComponent] = useState('dashboard');
    const handleSidebarItemClick = (componentName) => {
        setSelectedComponent(componentName);
      };

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