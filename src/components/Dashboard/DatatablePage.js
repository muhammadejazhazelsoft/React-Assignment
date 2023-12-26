import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { useDispatch, useSelector } from 'react-redux';
import { setUsersData } from '../../redux/actions/index';
import ToastifyServices from '../../Services/ToastifyServices';
import './DatatablePage.css';

const DatatablePage = ({ handleEdit }) => {
  const dispatch = useDispatch();
  const UserRegister = useSelector(state => state.UsersData);

  const handleDelete = (userId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this user?');
    
    if (confirmDelete) {
      const filterUsers = UserRegister.filter((user) => {
        return user.id !== userId;
      });
      dispatch(setUsersData(filterUsers));
      ToastifyServices.showSuccess('User Deleted Successfully');
    } else {
      ToastifyServices.showError('Delete action canceled');
    }
  };
  

  const handleEditUser = (userId) => {
    handleEdit(userId)
    console.log(`Edit user with ID: ${userId}`);
  };

  const rows = UserRegister.map(user => {
    return {
      ...user,
      deleteButton: <button className='btn btn-danger w-50' onClick={() => handleDelete(user.id)}>Delete</button>,
      editButton: <button className='btn btn-primary w-50 ms-2' onClick={() => handleEditUser(user.id)}>Edit</button>,
    };
  });

  const data = {
    columns: [
      {
        label: 'User Name',
        field: 'userName',
        sort: 'asc',
        width: 200,
      },
      {
        label: 'User Email',
        field: 'userEmail',
        sort: 'asc',
        width: 270,
      },
      {
        label: 'User Password',
        field: 'userPassword',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Actions',
        field: 'actions',
        width: 200,
        sort: 'disabled', // Disable sorting for action column
      },
    ],
    rows: rows.map(row => ({
      ...row,
      actions: (
        <div className='d-flex justify-content-between'>
          {row.deleteButton}
          {row.editButton}
        </div>
      ),
    })),
  };

  return (
    <MDBDataTable
      striped
      bordered
      small
      data={data}
    />
  );
};

export default DatatablePage;
