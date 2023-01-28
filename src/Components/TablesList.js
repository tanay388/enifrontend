import {React, useState} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import TableRowData from './TableRowData';
import NoItemAvailabl from './NoItemAvailabl';

function TablesList({ headers, userData }) {

    if(!userData.length) {
      return (
        <div>
          <TableContainer sx={{minWidth:650}} component={Paper}>

            <NoItemAvailabl />

          </TableContainer>
        </div>
      )
    }

    else
    return (
      <div>
        <TableContainer component={Paper}>
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
                <TableCell style={{ fontWeight: "bold" }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userData.map((row, index) => (
                
                <TableRow key={index} className="hoverTableEffect">   
                  <TableRowData row={row} idx={index}/>
                </TableRow>
              ))}
               
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
}

export default TablesList