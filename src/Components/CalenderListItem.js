import { format } from "date-fns";
import React, { useState, useEffect } from "react";
import { getByEmployeeID } from "../Api/api";
import UserCardPopover from "../Components/Schedule/UserCardPopover";
import { Avatar, Grid, IconButton, Tooltip } from "@mui/material";
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteSchedulePopup from "./Schedule/DeleteSchedulePopup";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import UpdateSchedule from "./Schedule/UpdateSchedule";
import ChipAvatar from "./Schedule/ChipAvatar";

function CalenderListItem(props) {
  

  // Delete Employee
  const [openDelete, setOpenDelete] = useState(false);
  const handleClickOpenDelete = () => {setOpenDelete(true);};
  const handleCloseDelete = () => {setOpenDelete(false);};

  // Update Employee
  const [openUpdate, setOpenUpdate] = useState(false);
  const handleClickOpenUpdate = () => {setOpenUpdate(true);};
  const handleCloseUpdate = () => {setOpenUpdate(false);};
  
  const [id, setID] = useState(props.propid)



  var cdate = new Date(props.date);
  var startDate = new Date(props.startTime);
  var endDate = new Date(props.endTime);
  const monthNames = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const [name, setName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [empEmail, setEmpEmail] = useState("");
  const [designation, setDesignation] = useState("");
  const [empPhone, setEmpPhone] = useState("");

  useEffect(() => {
    getEmployeeData();
  }, []);

  const getEmployeeData = async () => {
    await getByEmployeeID(props.empName[0]).then((res) => {
      // console.log(res.data);
      setName(res.data.Name);
      setEmpEmail(res.data.Email);
      setEmpPhone(res.data.Phone);
      setIsLoggedIn(res.data.Logged);
      setDesignation(res.data.Designation);
    });
  };
  return (
    <div
      className="calender-item"
      style={{ display: "flex", alignItems: "center" }}
    >
      <div
        className="circular-info"
        style={{
          display: "flex",
          alignItem: "center",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        {cdate.getDate()}
        <br></br>
        {monthNames[cdate.getMonth()]}
      </div>

      <div style={{ paddingLeft: "20px", flexGrow: "1" }}>
        <div style={{display: "flex"}}>
          <h3 style={{ paddingRight: "20px", flexGrow: "1"}} className="calener-list-heading">{props.title}</h3>
          
          <Tooltip title="Delete">
            <IconButton onClick={handleClickOpenDelete} >
            <DeleteIcon color="warning" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Update">
            <IconButton onClick={handleClickOpenUpdate} >
              <EditIcon color="success" />
            </IconButton>
          </Tooltip>
        </div>
        
        <p className="calender-list-time">
          {format(startDate, "hh:MM a") + " - " + format(endDate, "hh:MM a")}
        </p>
        {/* <div style={{display: 'flex'}}> */}
        <div style={{width: "fit-content", display:"inline",  background:"white", padding: "5px 10px", fontSize: "14px", borderRadius: "20px"}}>
          <WhereToVoteIcon /> {props.location}
        </div>
        <div style={{height: "10px"}} ></div>
        
        <Grid container spacing={1} >
        {
          
          props.empName.map((val) => {
              return (
            <Grid item >
            <ChipAvatar empIDSingle={val}/>
            </Grid>
              )
            })
        }
        
        </Grid>
        {/* <div style={{width: "fit-content", background:"white", padding: "5px 10px", borderRadius: "20px"}}>
          <AccountCircleIcon /> {name}
        </div> */}
        {/* </div> */}
      </div>
      

      <DeleteSchedulePopup row={id} openDelete={openDelete} handleCloseDelete={handleCloseDelete} />

      <UpdateSchedule show={openUpdate} handleClose={handleCloseUpdate} 
           schid={id}
           eId={props.empName}
           eTitle={props.title}
           eStart={props.startTime}
           eEnd={props.endTime}
           eDate={props.date}
           eLocation={props.location}
        />
    </div>
  );
}

export default CalenderListItem;
