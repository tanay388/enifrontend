import {React, useState} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import NoItemAvailabl from '../NoItemAvailabl';
import AttendenceRowData from './AttendenceRowData';

function AttendenceListItem({headers, userData}) {
    if(!userData.length) {
        return (
          <div>
            <TableContainer sx={{minWidth:650}} component={Paper}>
  
              <NoItemAvailabl />
  
            </TableContainer>
          </div>
        )
    }
    
    return (
        <div>
          <TableContainer component={Paper} >
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  {headers.map((row) => {
                    return (
                      <TableCell style={{ fontWeight: "bold" }}>
                        {row.label}
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {userData.map((row, index) => (
                  
                  <TableRow key={index} className="hoverTableEffect">   
                    <AttendenceRowData row={row} />
                  </TableRow>
                ))}
                 
              </TableBody>
            </Table>
          </TableContainer>
        </div>
    );
}

export default AttendenceListItem