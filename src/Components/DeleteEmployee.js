import {React, useState} from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import { deleteEmployeeID } from "../Api/api";
import ToastMessage from "./ToastMessage";

function DeleteEmployee({ openDelete, handleCloseDelete, row }) {
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
  const deleteEmployee = () => {
    deleteEmployeeID(row._id).then((res) => {
      if (res === 200) {
        setAlertMessage("Deleted Successfully.");
        setAlertColor("success");
        handleClickAlert();
        handleCloseDelete();
        setTimeout(() => {  window.location.reload(); }, 2000);
      } else {
        setAlertMessage("Failed to delete.");
        setAlertColor("warning");
        handleClickAlert();
      }
    });
  };
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
              Are you sure you want to Delete the following Employee?{" "}
              <strong>It cannot be undone.</strong>
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
          <Button onClick={deleteEmployee} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DeleteEmployee;
