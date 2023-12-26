import React, { useState } from 'react'
import Sidebar from '../Dashboard/SideBar';
import ProfileContent from '../Dashboard/ProfileContent';
const Profile = () => {
    const [selectedComponent, setSelectedComponent] = useState('dashboard');
    const handleSidebarItemClick = (componentName) => {
        setSelectedComponent(componentName);
    };

    // const renderContent = () => {
    //     switch (selectedComponent) {
    //         case 'dashboard':
    //             return <DashboardContent />;
    //         case 'profile':
    //             return <ProfileContent />;
    //         default:
    //             return <DashboardContent />; 
    //     }
    // };
    return (
        <div className='LandingPage'>
            <div className="SideBar">
                <Sidebar onItemClick={handleSidebarItemClick} />
            </div>
            <div className="main-content">
                {/* {renderContent()} */}
                <ProfileContent />
            </div>
        </div>
    )
}

export default Profile