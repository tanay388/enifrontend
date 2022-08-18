import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import './staticcomponents.css'
import { routesData } from './routes';
import { Button } from '@mui/material';

const drawerWidth = 240;

export default function SideBar() {
  const [routename, setRoutename] = React.useState("")
  React.useEffect(() => {
    setRoutename(window.location.pathname);
  }, [])
  
  return (
    <Box id="sidebar-continer-box" sx={{ display: 'flex' }} className={window.location.pathname==="/login"?"invisible":"visible"}>
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
                  <ListItemIcon>
                    {text.icon}
                  </ListItemIcon>
                  <ListItemText primary={text.title} />
                </ListItemButton>
              </ListItem>
              
            ))}
          </List>


          <Button variant="contained" style={{width: "80%", marginTop: "80px", marginLeft: "10%", marginRight:"10%"}}>
            Logout
          </Button>
        </Box>
      </Drawer>
      
    </Box>
  );
}
