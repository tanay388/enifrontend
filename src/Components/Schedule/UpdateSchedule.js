import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Grid } from "@mui/material";
import Modal from "react-bootstrap/Modal";
import TextField from "@mui/material/TextField";
import AutocompleteEmployList from "../AutocompleteEmployList";
import ToastMessage from "../ToastMessage";
import { updateSchedulefromID } from "../../Api/api";
import ChipAvatar from "./ChipAvatar";

function UpdateSchedule({ show, handleClose, schid, eId, eTitle, eLocation, eDate, eStart, eEnd }) {
    const eedate= new Date(eDate);
    const eestart= new Date(eStart);
    const eeend= new Date(eEnd);
  const [empID, setEmpID] = useState(eId);
  const [title, setTitle] = useState(eTitle);
  const [location, setLocation] = useState(eLocation);
  const [date, setDate] = useState(eedate);
  const [startTime, setStartTime] = useState(eestart);
  const [endTime, setEndTime] = useState(eeend);

  
  const handleStartTime = (newValue) => {
    setStartTime(newValue);
    setDate(newValue);
    // console.log(date);
  };
  const handleEndTime = (newValue) => {
    setEndTime(newValue);
    // console.log(endTime);
  };

  const handleLocation = (e) => {
    setLocation(e.target.value)
    // console.log(location)
  }

  const handleTitle = (e) => {
    setTitle(e.target.value);
    // console.log(title)
  }

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

  const setEmpIDArray = (value) => {
    if(!empID.includes(value))
    setEmpID([...empID, value])
    // console.log(value);
    // console.log(empID);
}

const handleDelteEmploy = (value) => {
  const filteredData = empID.filter((val) => val !== value);
  setEmpID(filteredData);
}


  const handleUpdateSchedule = () => {
    const scheduledData = {
      "EmpID": empID,
      "CurrDate": (date.getFullYear() + ("-") + ("0" + (date.getMonth()+1)).slice(-2) + ("-") + ("0" + date.getDate()).slice(-2)),
      "Entry": startTime,
      "Exit": endTime,
      "Location": location,
      "Description": title,
    }

    updateScheduleData(scheduledData)

    // console.log(scheduledData)
  };

  const updateScheduleData = async (data) => {
    await updateSchedulefromID(schid, data).then((res) => { 
      if (res === 200) {
        setAlertMessage("Updated Succesfully!");
        setAlertColor("success");
        handleClickAlert();
        setTimeout(() => {  window.location.reload(); }, 2000);
      } else {
        setAlertMessage("Failed");
        setAlertColor("warning");
        handleClickAlert();
      }
      handleClose();
    })
  }

  return (
    <>
    <ToastMessage
          openAlert={openAlert}
          handleCloseAlert={handleCloseAlert}
          alertColor={alertColor}
          alertMessage={alertMessage}
        />
      <Modal
        centered
        show={show}
        onHide={handleClose}
        style={{ zIndex: "1203", marginTop: "40px" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update schedule </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <AutocompleteEmployList setEmpID={setEmpIDArray} />

<div>
  {
    empID.map((val) => {
      return <ChipAvatar empIDSingle={val} handleDelete={handleDelteEmploy} />
    })
  }
</div>

          <Grid container style={{ marginTop: "10px" }} spacing={1}>
            <Grid item sm={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} />}
                  label="Task Start Time"
                  value={startTime}
                  onChange={handleStartTime}
                />
              </LocalizationProvider>
            </Grid>

            <Grid item sm={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} />}
                  label="Task End Time"
                  value={endTime}
                  onChange={handleEndTime}
                  minDateTime={startTime}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>

          <TextField
            style={{ marginTop: "10px" }}
            required
            fullWidth
            id="title"
            label="Task Title"
            value={title}
            onChange={handleTitle}
          />

          <TextField
            style={{ marginTop: "10px" }}
            fullWidth
            id="location"
            label="Reporting Location"
            value={location}
            onChange={handleLocation}
          />

          <Button
            variant="primary"
            onClick={handleUpdateSchedule}
            style={{ width: "100%", marginTop: "10px" }}
          >
            Add Task
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default UpdateSchedule;
