import React from 'react'
import Sidebar from '../SideBar'

const MainDashboard = ({ Component }) => {
    return (


        <div className='LandingPage'>
            <div className="SideBar">
                <Sidebar />
            </div>
            <div className="main-content">
                <Component />
            </div>
        </div>
    )
}

export default MainDashboard