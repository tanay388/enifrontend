import { React, useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import { Box, Button, Grid, TextField } from "@mui/material";
import TopBar from "../Components/TopBar";
import TablesList from "../Components/TablesList";
import { callEmployeesList } from "../Api/api";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";

function EmployeesList() {
  const headers = [
    { label: "Name", key: "Name" },
    { label: "Salary", key: "ChargePh" },
    { label: "Designation", key: "Designation" },
    { label: "Email", key: "Email" },
    { label: "Phone", key: "Phone" },
    { label: "Address", key: "Address" },
  ];
  const [employeesList, setEmployeesList] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await callEmployeesList().then((res) => {
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

  const fileName = "download";

  return (
    <div className="pageview">
      <TopBar name="View All Employees"></TopBar>
      <Button
                variant="contained"
                color="primary"
                className="export-btn"
                style={{marginBottom: "30px"}}
              >
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
          }}
        >
          <Grid container spacing={2} style={{padding: "10px 15px"}}>
            <Grid sm={8}>
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
            <Grid sm={4}>
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
            <Grid item sm={3} alignContent="center" justifyContent={"center"}>
              
            </Grid>
          </Grid>

          <TablesList headers={headers} userData={employeesList} />
        </Box>
      </div>
    </div>
  );
}

export default EmployeesList;
