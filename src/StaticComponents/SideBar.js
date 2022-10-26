import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import './staticcomponents.css'
import { routesData } from './routes';
import { Box, Button, Drawer } from '@mui/material';
import ResetPassword from '../Components/ResetPassword/ResetPassword';

const drawerWidth = 240;

export default function SideBar() {
  const [routename, setRoutename] = React.useState("")
  // Change Password
  const [showAddNew, setShowAddNew] = React.useState(false);
  const handleCloseAddNew = () => setShowAddNew(false);
  const handleShowAddNew = (index) =>{
    setShowAddNew(true);
  } 
  React.useEffect(() => {
    setRoutename(window.location.pathname);
  }, [])

  const Logout = () => {
    localStorage.removeItem('token');


    setTimeout(function () {
      window.location.pathname = "/"
    }, 1000);

    // window.location.reload();
  }

  const handleVisibility = () => {
    return window.location.pathname.includes("/dashboard") || window.location.pathname.includes("/manage-admin") || window.location.pathname.includes("/employeeslist") || window.location.pathname.includes("/addemploy") || window.location.pathname.includes("/manage-schedules") || window.location.pathname.includes("/view-schedules") || window.location.pathname.includes("/attendence");
  }
  
  return (
    <Box id="sidebar-continer-box" sx={{ display: 'flex' }} className={handleVisibility()?"visible":"invisible"}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {routesData.map((text, index) => (
              
              <ListItem key={text.url} 
              onClick={() => {window.location.pathname = text.url}} 
              className={window.location.pathname === text.url? "active": ""}
              disablePadding>
                <ListItemButton >
                  <ListItemIcon className={window.location.pathname === text.url? "active": ""}>
                    {text.icon}
                  </ListItemIcon>
                  <ListItemText primary={text.title} />
                </ListItemButton>
              </ListItem>
              
            ))}
          </List>


          <Button onClick={Logout} variant="contained" style={{width: "80%", marginTop: "80px", marginLeft: "10%", marginRight:"10%"}}>
            {"Logout"}
          </Button>
          <div onClick={handleShowAddNew} style={{color: "blue", textAlign: "center", marginTop: "15px", cursor: "pointer"}}>Reset Password</div>
        </Box>
      </Drawer>
      <ResetPassword show={showAddNew} handleClose={handleCloseAddNew} />
    </Box>
  );
}
