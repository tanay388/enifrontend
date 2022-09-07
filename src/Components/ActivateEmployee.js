import {React, useState} from 'react'
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import { updateEmployee } from '../Api/api';
import ToastMessage from './ToastMessage';

function ActivateEmployee({openDelete, handleCloseDelete, row}) {
  // Toast message
  const [openAlert, setOpenAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertColor, setAlertColor] = useState("success");
  const handleClickAlert = () => {
    setOpenAlert(true);
  };
  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };
    const formData = {
        "Active": !row.Active,
    }
    const updateData = async () => {
        await  updateEmployee(row._id, formData).then((res) => {  
          if (res === 200) {
            setAlertMessage(row.Active?"Deativated Successfully.":"Activated Successfully.");
            setAlertColor("success");
            handleClickAlert();
            handleCloseDelete();
            setTimeout(() => {  window.location.reload(); }, 2000);
            
          } else {
            setAlertMessage("Failed to Deativated.");
            setAlertColor("warning");
            handleClickAlert();
          }
           });
        console.log(formData.Active);
    }
  return (
    <>
    <ToastMessage
          openAlert={openAlert}
          handleCloseAlert={handleCloseAlert}
          alertColor={alertColor}
          alertMessage={alertMessage}
        />
      <Dialog
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <strong>{"Delete Employee Permantly?"}</strong>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <p style={{ color: "black" }}>
              Are you sure you want to{row.Active?" Deactivate this Employee. He/She will not be able to mark there attendence form now. ":" Activate this Employee. He/She can mark there attendence form now. "}
              <strong>It can be chnaged again Anytime.</strong>
            </p>
            <br></br>
            <p>
              <strong>Name: {row.Name}</strong>
              <br></br>
              <strong>Phone: {row.Phone}</strong>
              <br></br>
              <strong>EmailID: {row.Email}</strong>
            </p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDelete}>Disagree</Button>
          <Button onClick={updateData} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ActivateEmployee