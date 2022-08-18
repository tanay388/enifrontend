import React, {useState} from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import { deleteScheuleById } from "../../Api/api";
import ToastMessage from "../ToastMessage";

function DeleteSchedulePopup({ openDelete, handleCloseDelete, row }) {

  // Toast message
  const [openAlert, setOpenAlert] = React.useState(false);
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


  const deleteSchedule = async () => {
    await deleteScheuleById(row).then((res) => {
            if (res.status === 200) {
            setAlertMessage("Deleted Succesfully!");
            setAlertColor("success");
            handleClickAlert();
          } else {
            setAlertMessage("Failed");
            setAlertColor("warning");
            handleClickAlert();
          }
          handleCloseDelete();
    });
    // console.log(row)
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
          <strong>{"Delete Schedule Permantly?"}</strong>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <p style={{ color: "black" }}>
              Are you sure you want to Delete this Schedule?{" "}
              <strong>It cannot be undone.</strong>
            </p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDelete}>Disagree</Button>
          <Button onClick={deleteSchedule} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DeleteSchedulePopup;
