import React, { useEffect, useState } from 'react';
import { MDBDataTable } from 'mdbreact';
import { useDispatch, useSelector } from 'react-redux';
import { setUsersData } from '../../redux/actions/index';
import ToastifyServices from '../../Services/ToastifyServices';
import './DatatablePage.css';
import axios from 'axios';

const DatatablePage = ({ handleEdit }) => {
  const dispatch = useDispatch();
  const UserRegister = useSelector(state => state.UsersData);
  // const [UserRegister, setUserRegister] = useState([])


  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/userData');
      if (response.status !== 200) {
        throw new Error('Failed to fetch');
      }
      const bodyData = response.data;
      // setUserRegister(bodyData);
      dispatch(setUsersData(bodyData));

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


 

  const deleteUserApi = async (userId) => {
    try {
      const response = await axios.delete(`http://localhost:3001/userData/${userId}`);
  
      if (response.status === 200) {
        console.log('User deleted successfully');
        // Optionally, handle any necessary updates to your local state or UI after deleting the user
      } else {
        throw new Error('Failed to delete user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      // Optionally, show an error message or handle the error in your UI
    }
  };
  // const handleDelete = (userId) => {
  //   const confirmDelete = window.confirm('Are you sure you want to delete this user?');

  //   if (confirmDelete) {
  //     const filterUsers = UserRegister.filter((user) => {
  //       return user.id !== userId;
  //     });
  //     dispatch(setUsersData(filterUsers));
  //     ToastifyServices.showSuccess('User Deleted Successfully');
  //   } else {
  //     ToastifyServices.showError('Delete action canceled');
  //   }
  // };
  const handleDelete = async (userId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this user?');
  
    if (confirmDelete) {
      try {
        await deleteUserApi(userId);
  
        // If the deletion is successful, update the UI or state
        const filterUsers = UserRegister.filter((user) => user.id !== userId);
        dispatch(setUsersData(filterUsers));
        ToastifyServices.showSuccess('User Deleted Successfully');
      } catch (error) {
        ToastifyServices.showError('Failed to delete user');
        console.error('Error deleting user:', error);
      }
    } else {
      ToastifyServices.showError('Delete action canceled');
    }
  };
  
  


  const handleEditUser = (userId) => {
    handleEdit(userId)
    console.log(`Edit user with ID: ${userId}`);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
