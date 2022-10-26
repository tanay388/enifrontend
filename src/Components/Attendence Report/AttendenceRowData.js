import React from 'react'
import TableCell from '@mui/material/TableCell';
import { format } from 'date-fns';

function AttendenceRowData({row}) {
  const entryTime = new Date(row.Entry);
  const exitTime = new Date(row.Exit);
  return (
    <>
        <TableCell>{row.EmpName}</TableCell>
        <TableCell>{row.EmpPhone}</TableCell>
        <TableCell>{row.EmpEmail}</TableCell>
        <TableCell>{row.EmpSalaryPerHr}</TableCell>
        <TableCell>{row.Date}</TableCell>
        <TableCell>{format(entryTime, "HH:MM a")}</TableCell>
        <TableCell>{(row.Exit === "2022-08-07T10:24:03.000+00:00")?"N/A":format(exitTime, "HH:MM a")}</TableCell>
        <TableCell>{row.HoursWorkedToday.toFixed(2)}</TableCell>
        <TableCell>{row.EarningToday.toFixed(2)}</TableCell>
    </>
  )
}

export default AttendenceRowData