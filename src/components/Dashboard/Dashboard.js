import React from 'react'
import './Dashboard.css'
import Sidebar from './SideBar';
import DashboardContent from './DashboardContent';
const Dashboard = () => {

    return (
        <div className='LandingPage'>
            <div className="SideBar">
                <Sidebar />
            </div>
            <div className="main-content">
                <DashboardContent />
            </div>
        </div>
    )
}

export default Dashboard