import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { getAllPresentSchedule, getPresentScheduleByID } from '../Api/api';
import AutocompleteEmployList from '../Components/AutocompleteEmployList';
import { Button, Divider, Grid } from '@mui/material'
import ScheduleList from '../Components/Schedule/ScheduleList';
import TopBar from '../Components/TopBar'
import { printDocument } from '../Assets/Constants/Constants';

function IndividualSchedules() {
  const [empID, setEmpID] = useState("");
  const [schedulelist, setScheduleList] = useState([]);

  const onEmpIdChangehandler = (newID) =>{
    setEmpID(newID);
    getSchedule(newID);
  }
  useEffect(() => {
    getAllSchedule()
  }, [])
  

  const getSchedule = async (newId) => {
    await getPresentScheduleByID(newId).then ( (res) => {
      setScheduleList(res);
    })
  }
  
  const getAllSchedule = async () => {
    if(!empID){
      await getAllPresentSchedule().then ( (res) => {
        setScheduleList(res);
      })
    }
  }

  return (
    <div className="pageview">
        <TopBar name="View Your Future Schedules here" />
        <Button variant="contained" style={{marginBottom: "30px"}} onClick={printDocument}>Generate Pdf</Button>

        <Box id="divToPrint"
        style={{
            backgroundColor: "white",
            padding: "25px",
            maxWidth: "900px",
            borderRadius: "8px",
        }} >
            
            <Grid container spacing={2}>
            <Grid item xs={5} md={7} style={{alignItems: "center"}}>
            <h2 style={{fontSize: "18px", color: "#00137b", fontWeight: "bold", marginBottom: "30px"}}>Available Schedules</h2>
            </Grid>
            <Grid item xs={7} md={5} style={{alignItems: "center"}}>
                <AutocompleteEmployList setEmpID={onEmpIdChangehandler}/>
            </Grid>
        </Grid>

        <hr style={{marginTop: "25px", marginBottom: "30px"}} />

        <ScheduleList SchedulesList={schedulelist} />


        </Box>
        
    </div>
  )
}

export default IndividualSchedules