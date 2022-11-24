import React from 'react'
import useGetUsers from '../hooks/useGetUsers'
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'username',
    headerName: 'Username',
    width: 130,
  },
  {
    field: 'ip',
    headerName: 'IP',
    width: 130,
  },
  {
    field: 'image',
    headerName: 'Image',
    width: 200,
  },
];

export default function Users () {

    const API='https://dummyjson.com/users';
    const users = useGetUsers(API);

    return (
        <>
        <div>Users</div>
        <div className="container">
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={users}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </div>
        </>
  )

}
