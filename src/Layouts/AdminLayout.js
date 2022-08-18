import React from 'react'
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Header from '../StaticComponents/Header'
import SideBar from '../StaticComponents/SideBar'
import './AdminLayout.css'


class AdminLayout extends React.Component {
    render(){
      return (
        <>
          <Header />
          <Box sx={{ display: "flex" }}>
            <SideBar />
            <Box style={{backgroundColor: "#f0f6fd"}} component="main" sx={{ flexGrow: 1, p: 0}}>
              <Toolbar />
              <main>{this.props.children}</main>
              <br></br>
            </Box>
          </Box>
        </>
      );
    }
  }

export default AdminLayout