import React from 'react';
import {
  CDBSidebar,
  CDBSidebarHeader,
  CDBSidebarMenuItem,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBSidebarSubMenu,
  CDBSidebarFooter,
  CDBBadge,
  CDBContainer,
} from 'cdbreact';
import { logout, setIsLoggedIn } from '../../Slice/DataFile';
import { useDispatch } from 'react-redux';

const Sidebar = ({ onItemClick }) => {
  const dispatch = useDispatch()
  const handleLogout  = () => {
    localStorage.removeItem('userData');
    dispatch(logout());
  }
  return (
    <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
      <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
        <div className="" style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={'https://seeklogo.com/images/B/butterfly-logo-0A00378822-seeklogo.com.png'}
            alt=""
            style={{ width: '30px' }}
          />
          <h6 className="ms-2">BABYCARE ™</h6>
        </div>
      </CDBSidebarHeader>
      <CDBSidebarContent>
        <CDBSidebarMenu>
          <CDBSidebarMenuItem onClick={() => onItemClick('dashboard')} icon="th-large">Dashboard</CDBSidebarMenuItem>
          <CDBSidebarMenuItem onClick={() => onItemClick('profile')} icon="sticky-note">Profile</CDBSidebarMenuItem>
          <CDBSidebarMenuItem onClick={handleLogout } icon="chart-line" iconType="solid">
            Logout
          </CDBSidebarMenuItem>
        </CDBSidebarMenu>
      </CDBSidebarContent>
    </CDBSidebar>
  )
};

export default Sidebar;


