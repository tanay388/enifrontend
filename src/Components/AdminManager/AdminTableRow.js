import {React, useState} from 'react'
import { IconButton, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import QrCodeIcon from '@mui/icons-material/QrCode';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import TableCell from '@mui/material/TableCell';
import Tooltip from '@mui/material/Tooltip';

function AdminTableRow({row}) {
  // Edit Employee
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (index) =>{
    setShow(true);
  } 

  // Delete Employee
  const [openDelete, setOpenDelete] = useState(false);
  const handleClickOpenDelete = () => {setOpenDelete(true);};
  const handleCloseDelete = () => {setOpenDelete(false);};

  
    // QR Code of Employee
    const [openQR, setOpenQR] = useState(false);
    const handleClickOpenQR = () => {setOpenQR(true);};
    const handleCloseQR = () => {setOpenQR(false);};
    
    // Activate\Deactivate Employee
    const [openActive, setOpenActive] = useState(false);
    const handleClickOpenActive = () => {setOpenActive(true);};
    const handleCloseActive = () => {setOpenActive(false);};

  return (
    <>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.userRole}</TableCell>
                  {/* <TableCell>{row.Email}</TableCell>
                  <TableCell>{row.Phone}</TableCell>
                  <TableCell>{row.Address}</TableCell> */}
                  {/* <TableCell>
                  <Tooltip title="Edit">
                    <IconButton onClick={handleShow}>
                      <EditIcon color="info" />
                    </IconButton>
                  </Tooltip>
                  
                   <Tooltip title="Delete">
                    <IconButton onClick={handleClickOpenDelete}>
                      <DeleteIcon color="warning" />
                    </IconButton>
                  </Tooltip>  
                   <Tooltip title={row.Active?"Deactivate":"Activate"}>
                    <IconButton onClick={handleClickOpenActive}>
                      <VisibilityOffIcon className={row.Active?"invisible":"visible"} style={{color: "rgb(204, 0, 0)"}} />
                      <RemoveRedEyeIcon className={row.Active?"visible":"invisible"} style={{color: "rgb(0, 142, 2)"}} />
                    </IconButton>
                  </Tooltip> 
                    <EditEmployeeData
                      userData={row}
                      handleClose={handleClose}
                      show={show}
                    />  

                    // Delete Employee 
                    <DeleteEmployee row={row} openDelete={openDelete} handleCloseDelete={handleCloseDelete} />
                    <ShowQRCode row={row} openDelete={openQR} handleCloseDelete={handleCloseQR} />
                    <ActivateEmployee row={row} openDelete={openActive} handleCloseDelete={handleCloseActive} />
                  </TableCell> */}
    </>
  )
}

export default AdminTableRow