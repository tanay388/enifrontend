import { Box, Button, Grid, IconButton, InputBase, Paper } from '@mui/material'
import {React, useState, useEffect} from 'react'
import { CSVLink } from 'react-csv'
import { callEmployeesList, getAllAttendenceOfMonth } from '../Api/api'
import SearchIcon from "@mui/icons-material/Search";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TopBar from '../Components/TopBar'
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import AttendenceListItem from '../Components/Attendence Report/AttendenceListItem';

function WorkReport() {
    
    const [employeesList, setEmployeesList] = useState([]);
    const [originalList, setOriginalList] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    
  const [value, setValue] = useState(Date.now());

  const handleChange = (newValue) => {
    setValue(newValue);
    getData(newValue)
  };
    useEffect(() => {
        getData(value);
    }, []);
      
    const getData = async (val) => {
        if(val == null){
            val = Date.now()
        }
        const dateoriginal = new Date(val);
        const dateString = dateoriginal.getFullYear() + ("-") + ("0" + (dateoriginal.getMonth()+1)).slice(-2)
        await getAllAttendenceOfMonth(dateString).then((res) => {
            // console.log(res)
            res.reverse()
          setEmployeesList(res);
          setOriginalList(res);
        });
    };

    const searchFilter = (searchValue) => {
      setSearchInput(searchValue)
      if (searchInput !== '') {
          const filteredData = originalList.filter((item) => {
              return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
          })
          setEmployeesList(filteredData)
      }
      else{
          setEmployeesList(originalList)
      }
      
    };


    const headers = [
        { label: "Name", key: "EmpName" },
        { label: "Phone", key: "EmpPhone" },
        { label: "Email", key: "EmpEmail" },
        { label: "Salary (per hr.)", key: "EmpSalaryPerHr" },
        { label: "Date", key: "Date" },
        { label: "Entry", key: "Entry" },
        { label: "Exit", key: "Exit" },
        { label: "Hours Worked", key: "HoursWorkedToday" },
        { label: "Earning", key: "EarningToday" },
    ];
    

  const fileName = "attendence-report";
  return (
    <div className="pageview">
        <TopBar name="Manage daily attendence here." />
        <Button
            variant="contained"
            color="primary"
            className="export-btn"
            style={{marginBottom: "30px"}}>
                <CSVLink
                  headers={headers}
                  data={employeesList}
                  filename={fileName}
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  {/* {loading ? 'Loading csv...' : 'Export Data'} */}
                  Export Data
                </CSVLink>
        </Button>
        <div className="container">
        <Box
          style={{
            backgroundColor: "white",
            padding: "25px",
            borderRadius: "8px",
            maxWidth: "92%"
          }}
        >
          <Grid container spacing={2} style={{padding: "10px 15px"}}>
            <Grid item sm={5}>
              <h2
                style={{
                  fontSize: "24px",
                  color: "#00137b",
                  fontWeight: "bold",
                  marginBottom: "30px",
                }}
              >
                Employee data
              </h2>
            </Grid>
            <Grid item sm={4}>
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  onChange={(e) => searchFilter(e.target.value)}
                  value={searchInput}
                  placeholder="Search Employee List"
                  inputProps={{ "aria-label": "search employee list" }}
                />
                <IconButton
                //   type="submit"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
            </Grid>
            <Grid item sm={3} alignContent="center" justifyContent={"center"} style={{paddingBottom: "4px !important",paddingTop: "0px !important"}}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                views={['year', 'month']}
                label="Year and Month"
                inputFormat="yyyy-MM"
                showMonthYearPicker
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
            </Grid>
          </Grid>

          <AttendenceListItem headers={headers} userData={employeesList} />
        </Box>
      </div>

        
        
    </div>
  )
}

export default WorkReport