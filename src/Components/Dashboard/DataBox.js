import { Grid } from '@mui/material'
import {React, useState, useEffect} from 'react'
import { getDashboardData } from '../../Api/api'


const DataBox = ({color}) => {
    
  const [activeUserCount, setActiveUserCount] = useState(0)
  const [loggedUserCount, setLoggedUserCount] = useState(0)
  const [ScheduleTodayCount, setScheduleTodayCount] = useState(0)

  useEffect(() => {
    getDataForDashBoard()
  }, [])

  const getDataForDashBoard = async () => {

    await getDashboardData().then((res) => {
      setActiveUserCount(res.userCount);
      setLoggedUserCount(res.loggedUser);
      setScheduleTodayCount(res.ScheduleCountToday);

    })

  }
  return (
    <>
        <Grid container spacing={2} >
            <Grid xs={4} item style={{minHeight: "150px", backgroundColor: color, color:"white", border: "solid 5px white" }}>
                <h4 className='title-databox'>Total Active Employees:</h4>
                <h1>{activeUserCount}</h1>
            </Grid>

            <Grid xs={4} item style={{minHeight: "150px", backgroundColor: color, color:"white", border: "solid 5px white" }}>
                <h4 className='title-databox'>Total LoggedIn Employees:</h4>
                <h1>{loggedUserCount}</h1>
            </Grid>

            <Grid xs={4} item style={{minHeight: "150px", backgroundColor: color, color:"white", border: "solid 5px white" }}>
                <h4 className='title-databox'>Total Schedules:</h4>
                <h1>{ScheduleTodayCount}</h1>
            </Grid>
        </Grid>
        
    </>
  )
}

export default DataBox