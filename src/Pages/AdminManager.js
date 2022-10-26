import { Grid, IconButton, InputBase } from '@mui/material'
import { Box } from '@mui/system'
import {React, useState, useEffect}from 'react'
import TopBar from '../Components/TopBar'
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import { callAdminList } from '../Api/api';
import AdminListTable from '../Components/AdminManager/AdminListTable';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddNewAdmin from '../Components/AdminManager/AddNewAdmin';


const AdminManager = () => {
  // Edit Employee
  const [showAddNew, setShowAddNew] = useState(false);
  const handleCloseAddNew = () => setShowAddNew(false);
  const handleShowAddNew = (index) =>{
    setShowAddNew(true);
  } 


  const headers = [
    { label: "Name", key: "name" },
    { label: "Email", key: "email" },
    { label: "User Role", key: "userRole" },
  ];

  const [employeesList, setEmployeesList] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await callAdminList().then((res) => {
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
  return (
    <div className='pageview'>
        <TopBar name="Manage all Admins at one place" />

        <div className='container'>
            <Box
                style={{
                    backgroundColor: "white",
                    padding: "25px",
                    borderRadius: "8px",
                }} >

<Grid container spacing={2} style={{padding: "10px 15px"}}>
            <Grid sm={7}>
              <h2
                style={{
                  fontSize: "24px",
                  color: "#00137b",
                  fontWeight: "bold",
                  marginBottom: "30px",
                }}
              >
                All Admin data
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
                  placeholder="Search Admin List"
                  inputProps={{ "aria-label": "search admin list" }}
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
            <Grid item sm={1} alignContent="center" justifyContent={"center"}>
              <IconButton onClick={handleShowAddNew} style={{selfAlign: "centre", backgroundColor: "#1976d2"}}>
                  <PersonAddIcon fontSize='20px' style={{color: "white"}}/>
              </IconButton>
            </Grid>
          </Grid>

          <AdminListTable headers={headers} userData={employeesList} />

          </Box>
        </div>

        <AddNewAdmin show={showAddNew} handleClose={handleCloseAddNew} />
    </div>
  )
}

export default AdminManager