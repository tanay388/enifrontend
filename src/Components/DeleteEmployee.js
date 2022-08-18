import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import { deleteEmployeeID } from "../Api/api";

function DeleteEmployee({ openDelete, handleCloseDelete, row }) {
  const deleteEmployee = () => {
    deleteEmployeeID(row._id);
  };
  return (
    <>
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
