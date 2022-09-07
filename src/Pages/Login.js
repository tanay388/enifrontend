import { Box, Button, Grid, TextField } from '@mui/material'
import {Image} from 'react-bootstrap'
import LoginPng from '../Assets/Images/login.png'
import LoginIcon from '@mui/icons-material/Login';
import LogoEni from '../Assets/Logo/logo_eni.png'
import {React, useEffect, useState} from 'react'
import ToastMessage from '../Components/ToastMessage';
import { useNavigate } from 'react-router';
import { adminUrl } from '../Assets/Constants/Constants';

function Login() {
  
  const nav = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [openAlert, setOpenAlert] = useState(false);
  const [alertColor, setAlertColor] = useState("warning");
  const [alertMessage, setAlertMessage] = useState("Filed");
  const handleOpenAlert = () => {
    setOpenAlert(true)
  }
  const handleCloseAlert = (e) => {
    setOpenAlert(false)
  }
  
  useEffect(() => {
    checkLoggedIn();
  }, [])

  const checkLoggedIn = () => {
    const token = localStorage.getItem("token");
    if(token){
      window.location.pathname = "/dashboard";
    }
    
  }
  

  const handleUidChange = (e) => {
    setUserId(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const handleSubmition = async () => {
    if(userId === "" || password === ""){
      alert("Please fill all the details.")
    }else{
      const loginData = {
        "email": userId,
        "passwod": password
      }

      // console.log(loginData)
      const url = adminUrl + "/login/";
      const response = await fetch( url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: userId, password: password })
      });
      const json = await response.json()
        // console.log(json);
      if (json.success) {
          // Save the auth token and redirect
          localStorage.setItem('token', json.authToken);
          handleOpenAlert();
          setAlertColor("success");
          setAlertMessage("Logged in successfully");

          setTimeout(function () {
            window.location.pathname = "/dashboard"
          }, 1000);

            // window. location. reload(false);
        }
        else {
          handleOpenAlert();
          setAlertMessage(json.errors[0].msg);
        }
    }
  }
  return (
    <div style={{height: "100%", width: "100%" }}>
        <Grid alignItems="center" justifyContent="center" container spacing={2}>
          <ToastMessage openAlert={openAlert} handleCloseAlert={handleCloseAlert} alertColor={alertColor} alertMessage={alertMessage} />
            

            <Grid style={{height: "90%"}} alignItems="center" item sm={5}>
              <Box style={{backgroundColor: "white",height: "70%", flexDirection: "column",borderRadius: "10px",display: "flex", alignItems: "center", justifyContent: "center", margin: "30px", padding: "50px"}} >
                  
                  <Image src={LogoEni} style={{height: "100px"}}/>
                  <div style={{height: "30px"}}></div>
                  <TextField
                    fullWidth
                    value={userId}
                    onChange={handleUidChange}
                    variant="outlined"
                    label="USER ID"
                    placeholder='User ID'
                    />
                  <div style={{height: "30px"}}></div>
                  <TextField
                    fullWidth
                    value={password}
                    onChange={handlePasswordChange}
                    variant="outlined"
                    label="Password"
                    placeholder='Password'
                    type="password"
                    />

                  <div style={{height: "30px"}}></div>

                  <Button variant='contained' onClick={handleSubmition} fullWidth startIcon={<LoginIcon />}>Login</Button>
                  
              </Box>
            </Grid>

            <Grid  style={{height: "100vh"}} alignItems="center" justifyContent="center" item sm={7}>
                <Image src={LoginPng} style={{height: "80vh", marginLeft: "100px"}}/>
            </Grid>
        </Grid>
        
    </div>
  )
}

export default Login