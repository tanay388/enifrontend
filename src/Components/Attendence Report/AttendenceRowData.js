import React from 'react'
import TableCell from '@mui/material/TableCell';

function AttendenceRowData({row}) {
  const entryTime = new Date(row.Entry);
  const exitTime = new Date(row.Exit);
  var hours = entryTime.getHours() > 12 ? entryTime.getHours() - 12 : entryTime.getHours();
  var am_pm = entryTime.getHours() >= 12 ? "PM" : "AM";
  hours = hours < 10 ? "0" + hours : hours;
  var minutes = entryTime.getMinutes() < 10 ? "0" + entryTime.getMinutes() : entryTime.getMinutes();
  var seconds = entryTime.getSeconds() < 10 ? "0" + entryTime.getSeconds() : entryTime.getSeconds();
  var sTime = hours + ":" + minutes + ":" + seconds + " " + am_pm;

  
  var ehours = exitTime.getHours() > 12 ? exitTime.getHours() - 12 : exitTime.getHours();
  var eam_pm = exitTime.getHours() >= 12 ? "PM" : "AM";
  ehours = ehours < 10 ? "0" + ehours : ehours;
  var eminutes = exitTime.getMinutes() < 10 ? "0" + exitTime.getMinutes() : exitTime.getMinutes();
  var eseconds = exitTime.getSeconds() < 10 ? "0" + exitTime.getSeconds() : exitTime.getSeconds();
  var eTime = ehours + ":" + eminutes + ":" + eseconds + " " + eam_pm;
  return (
    <>
        <TableCell>{row.EmpName}</TableCell>
        <TableCell>{row.EmpPhone}</TableCell>
        <TableCell>{row.EmpEmail}</TableCell>
        <TableCell>{row.EmpSalaryPerHr}</TableCell>
        <TableCell>{row.Date}</TableCell>
        {/* <TableCell>{format(entryTime, "HH:MM a")}</TableCell> */}
        <TableCell>{sTime}</TableCell>
        <TableCell className={(eTime === "03:54:03 PM" && exitTime.getFullYear() === 2022 && exitTime.getMonth() === 7)? "loggedin-cell":""}>{(eTime === "03:54:03 PM" && exitTime.getFullYear() === 2022 && exitTime.getMonth() === 7)? "Logged In":eTime}</TableCell>
        
        {/* <TableCell>{(row.Exit === "2022-08-07T10:24:03.000+00:00")?"N/A":format(exitTime, "HH:MM a")}</TableCell> */}

        <TableCell>{row.HoursWorkedToday.toFixed(2)}</TableCell>
        <TableCell>{row.EarningToday.toFixed(2)}</TableCell>
    </>
  )
}

export default AttendenceRowData