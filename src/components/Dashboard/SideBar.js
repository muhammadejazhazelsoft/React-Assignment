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
import { setLoggedIn } from '../../features/DataFile';
import { useDispatch } from 'react-redux';

const Sidebar = ({onItemClick}) => {
  const dispatch=useDispatch()
  const logout = () => {
    // Assuming you stored an item in Local Storage with a key named 'myItem'
    dispatch(setLoggedIn(false))

  }
  return (
    <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
      <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
        <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
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
          <CDBSidebarMenuItem onClick={logout} icon="chart-line" iconType="solid">
            Logout
          </CDBSidebarMenuItem>
        </CDBSidebarMenu>
      </CDBSidebarContent>
    </CDBSidebar>
  )
};

export default Sidebar;