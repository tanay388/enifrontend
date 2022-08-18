import { Box, Button, Grid, TextField } from '@mui/material'
import {Image} from 'react-bootstrap'
import LoginPng from '../Assets/Images/login.png'
import LoginIcon from '@mui/icons-material/Login';
import LogoEni from '../Assets/Logo/logo_eni.png'
import React from 'react'

function Login() {
  return (
    <div style={{height: "100vh", width: "100%" }}>
        <Grid alignItems="center" justifyContent="center" container spacing={2}>
            <Grid  style={{height: "100vh"}} alignItems="center" justifyContent="center" item sm={7}>
                <Image src={LoginPng} style={{height: "80vh"}}/>
            </Grid>

            <Grid style={{height: "100vh"}} alignItems="center" item sm={5}>
              <Box style={{backgroundColor: "white",height: "60vh", flexDirection: "column",borderRadius: "10px",display: "flex", alignItems: "center", justifyContent: "center", margin: "30px", padding: "25px"}} >
                  
                  <Image src={LogoEni} height={90} />
                  <div style={{height: "30px"}}></div>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="USER ID"
                    placeholder='User ID'
                    />
                  <div style={{height: "30px"}}></div>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Password"
                    placeholder='Password'
                    type="password"
                    />

                  <div style={{height: "30px"}}></div>

                  <Button variant='contained' fullWidth startIcon={<LoginIcon />}>Login</Button>

              </Box>
            </Grid>
        </Grid>
        
    </div>
  )
}

export default Login