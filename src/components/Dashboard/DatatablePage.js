import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { useDispatch, useSelector } from 'react-redux';
import { setUsersData } from '../../Slice/DataFile';
import ToastifyServices from '../../Services/ToastifyServices';

const DatatablePage = () => {
 const dispatch= useDispatch()
  const UserRegister = useSelector(state => state.UserRegister.UsersData);
  const rows = UserRegister.map(user => {
    return {
      ...user,
      deleteButton: <button className='btn btn-danger w-100' onClick={() => handleDelete(user.id)}>Delete</button>
    };
  });

  const handleDelete = (userId) => {
    const filterUsers = UserRegister.filter((user) => {
      return user.id !== userId
    })
    dispatch(setUsersData(filterUsers))
    ToastifyServices.showSuccess('User Deleted Successfully')
  };

  const data = {
    columns: [
      // {
      //   label: 'id',
      //   field: 'id',
      //   sort: 'asc',
      //   width: 150
      // },
      {
        label: 'userName',
        field: 'userName',
        sort: 'asc',
        width: 200
      },
      {
        label: 'userEmail',
        field: 'userEmail',
        sort: 'asc',
        width: 270
      },
      {
        label: 'userPassword',
        field: 'userPassword',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Action',
        field: 'deleteButton',
        width: 100
      }
    ],
    rows: rows
  };

  return (
    <MDBDataTable
      striped
      bordered
      small
      data={data}
    />
  );
}

export default DatatablePage;
