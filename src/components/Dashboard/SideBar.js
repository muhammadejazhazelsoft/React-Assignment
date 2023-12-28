import React from 'react';
import {
  CDBSidebar,
  CDBSidebarHeader,
  CDBSidebarMenuItem,
  CDBSidebarContent,
  CDBSidebarMenu,
} from 'cdbreact';
import { logout } from '../../redux/actions/index';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ToastifyServices from '../../Services/ToastifyServices';

const Sidebar = ({ onItemClick }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('userData');
    dispatch(logout());
    localStorage.removeItem('url');
    ToastifyServices.showSuccess('Successfully Logout');
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
          <CDBSidebarMenuItem onClick={() => {
            localStorage.setItem('url', '/dashboard')
            navigate('/dashboard')
          }} icon="th-large">Dashboard</CDBSidebarMenuItem>
          <CDBSidebarMenuItem onClick={() => {
            localStorage.setItem('url', '/profile'); // Update the URL here
            navigate('/profile');
          }} icon="sticky-note">
            Profile
          </CDBSidebarMenuItem>

          <CDBSidebarMenuItem onClick={handleLogout} icon="chart-line" iconType="solid">
            Logout
          </CDBSidebarMenuItem>
        </CDBSidebarMenu>
      </CDBSidebarContent>
    </CDBSidebar>
  )
};

export default Sidebar;


