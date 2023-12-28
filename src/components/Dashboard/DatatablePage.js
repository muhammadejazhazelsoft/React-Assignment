import React from 'react';
import { MDBDataTable } from 'mdbreact';

import './DatatablePage.css';

const DatatablePage = ({rows}) => {

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
        width: 100,
        sort: 'disabled',
      },
      {
        label: 'Actions',
        field: 'actions',
        width: 200,
        sort: 'disabled',
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
