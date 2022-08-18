import { Box, Grid, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TopBar from '../Components/TopBar'


import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import CalenderListItem from '../Components/CalenderListItem';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Button from 'react-bootstrap/Button';
import AddScheduleModal from '../Components/AddScheduleModal';
import { getScheduleByDate } from '../Api/api';
import ScheduleList from '../Components/Schedule/ScheduleList';

const adapter = new AdapterDateFns();

function ManageSchedues() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [value, setValue] = React.useState(adapter.date());
    const [schedules, setSchedules] = useState([]);

  

  useEffect(() => {
    getData(adapter.date());
  }, []);

  const getData = async (value) => {
    const date= value.getFullYear() + ("-") + ("0" + (value.getMonth()+1)).slice(-2) + ("-") + ("0" + value.getDate()).slice(-2)
    console.log(date)
    await  getScheduleByDate(date).then((res) => {  setSchedules(res); });
};

  return (
    <div className="pageview">
      <TopBar name="View and Manage Schedules here" />
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <Box
            style={{
              backgroundColor: "white",
              padding: "25px",
              borderRadius: "8px",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={6} md={8}>
                <h2 style={{fontSize: "24px", color: "#00137b", fontWeight: "bold", marginBottom: "30px"}}>
                  Schedules for{" "}
                  {value.getFullYear() + ("-") + ("0" + (value.getMonth()+1)).slice(-2) + ("-") + ("0" + value.getDate()).slice(-2)}
                </h2>
              </Grid>

              <Grid item xs={6} md={4} style={{display: 'flex', justifyContent: 'end'}}>
                <Button variant="primary" onClick={handleShow}>
                     Add New Task
                </Button>
                <AddScheduleModal handleClose={handleClose} show={show} />
              </Grid>
            </Grid>

            <ScheduleList SchedulesList={schedules} />
          </Box>
        </Grid>
        <Grid style={{position:"static"}} item xs={6} md={4}>
          <Box
            style={{
              backgroundColor: "white",
              padding: "25px",
              borderRadius: "8px",
            }}
          >
            <h5>Calender</h5>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <StaticDatePicker
                displayStaticWrapperAs="desktop"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                  getData(newValue)
                }}
                renderInput={(params) => <TextField {...params} />}
                dayOfWeekFormatter={(day) => `${day}.`}
                toolbarFormat="eee dd MMMM"
                showToolbar
              />
            </LocalizationProvider>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default ManageSchedues