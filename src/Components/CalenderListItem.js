import { format } from "date-fns";
import React, { useState, useEffect } from "react";
import { getByEmployeeID } from "../Api/api";
import UserCardPopover from "../Components/Schedule/UserCardPopover";
import { Avatar, Chip, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteSchedulePopup from "./Schedule/DeleteSchedulePopup";
import { borderRadius } from "@mui/system";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

function CalenderListItem(props) {
  

  // Delete Employee
  const [openDelete, setOpenDelete] = useState(false);
  const handleClickOpenDelete = () => {setOpenDelete(true);};
  const handleCloseDelete = () => {setOpenDelete(false);};
  
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
    await getByEmployeeID(props.empName).then((res) => {
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
          <IconButton onClick={handleClickOpenDelete} style={{backgroundColor: "white", width: "40px", height:"40px", marginLeft: "5px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
            <DeleteIcon color="warning" />
          </IconButton>
        </div>
        
        <p className="calender-list-time">
          {format(startDate, "hh:MM a") + " - " + format(endDate, "hh:MM a")}
        </p>
        <div style={{width: "fit-content", background:"white", padding: "5px 10px", borderRadius: "20px"}}>
          <WhereToVoteIcon /> {props.location}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "80px",
          justifyContent: "end",
          paddingLeft: "10px",
        }}
      >
        <Avatar
          // className={!isLoggedIn ? "visible" : "invisible"}
          alt={name}
          src={`https://ui-avatars.com/api/?name=${name}&color=7F9CF5&background=FFFFFF`}
          onMouseEnter={handleClick}
          onMouseLeave={handleClose}
        />

        {/* <StyledBadge
          className={isLoggedIn? "visible" : "invisible"}
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar
            alt={name}
            src={`https://ui-avatars.com/api/?name=${name}&color=7F9CF5&background=FFFFFF`}
            onMouseEnter={handleClick}
            onMouseLeave={handleClose}
          />
        </StyledBadge> */}

        <UserCardPopover
          anchorEl={anchorEl}
          handlePopoverClose={handleClose}
          open={open}
          name={name}
          phone={empPhone}
          email={empEmail}
          designation={designation}
          isLoggedin={isLoggedIn}
        />

        <DeleteSchedulePopup row={id} openDelete={openDelete} handleCloseDelete={handleCloseDelete} />
      </div>
    </div>
  );
}

export default CalenderListItem;
