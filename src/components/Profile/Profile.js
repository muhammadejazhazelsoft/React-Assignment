import React from 'react'
import Sidebar from '../Dashboard/SideBar';
import ProfileContent from '../Dashboard/ProfileContent';
const Profile = () => {
    return (
        <div className='LandingPage'>
            <div className="SideBar">
                <Sidebar />
            </div>
            <div className="main-content">
                <ProfileContent />
            </div>
        </div>
    )
}

export default Profile