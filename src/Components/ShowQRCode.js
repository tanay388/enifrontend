import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';
import QRCode from "qrcode.react";
import { downloadQRCode } from '../Assets/Constants/Constants';

function ShowQRCode({ openDelete, handleCloseDelete, row }) {
  return (
    <>
      <Dialog
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <strong>{"Generatd Qr Code"}</strong>
        </DialogTitle>
        <DialogContent style={{display: "flex",  flexDirection: "column",}}>
          <QRCode
            id='QrCodePNGimg'
            style={{alignSelf: "center"}}
            value={row._id}
            className={row._id ? "visible" : "invisible"}
          />
          <Button
            style={{alignSelf: "center", marginTop: "10px"}}
            onClick={downloadQRCode}
            className={row._id ? "visible" : "invisible"}>Download Qr Code</Button>
          <p style={{marginTop: "20px"}} className={row._id ? "visible" : "invisible"}>
            Emp ID: {row._id}
            <br></br>
            
            Name: {row.Name}
            <br></br>
            Designation: {row.Designation}
            <br></br>
            Email: <a href={'mailto:'+ row.Email}>{row.Email}</a>
            <br></br>
            Phone: {row.Phone}
          </p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDelete}>Done</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ShowQRCode