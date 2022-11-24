import React, {useState} from 'react'
import useGetUsers from '../hooks/useGetUsers'
import { DataGrid } from '@mui/x-data-grid';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Modal from '@mui/material/Modal';

export default function Users () {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: 250,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
      
      const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
          field: "user",
          headerName: "User",
          width: 200,
          renderCell: (params) => {
            return (
              <>
                <Avatar src={params.row.image} />
                {params.row.username}
              </>
            );
          }
        },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 90,
        },
        {
          field: 'ip',
          headerName: 'IP',
          width: 130,
        },
      ];

    const API='https://dummyjson.com/users';
    const users = useGetUsers(API);
    const [data, setData] = useState({})
    
    const handleRowClick = (params) => {
        const {firstName, lastName, email, gender, phone, birthDate} = params.row
        setData({
            name: firstName + ' ' + lastName,
            email,
            gender,
            phone,
            birthDate
        })
        handleOpen()
      };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Users
            </Typography>
            </Toolbar>
        </AppBar>
        </Box>

        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                {data.name}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 4 }}>
                {`Email: ${data.email},
                Gender: ${data.gender},
                Phone: ${data.phone},
                Birthdate: ${data.birthDate}` }
            </Typography>
            </Box>
        </Modal>

        <div className="container my-4">
            <div style={{ height: 650, width: '100%' }}>
                <DataGrid
                    onRowClick={handleRowClick}
                    rows={users}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                />
            </div>
        </div>
        </>
  )

}
