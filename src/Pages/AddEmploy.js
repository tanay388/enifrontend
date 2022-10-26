import React, { useState } from 'react'
import TopBar from '../Components/TopBar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Box, Grid } from '@mui/material';
import QRCode from "qrcode.react";
import { addNewEmployee } from '../Api/api';
import Skeleton from '@mui/material/Skeleton';


function AddEmploy() {
  const [disable, setDisable] = useState(false);



  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone]  = useState("");
  const [salary, setSalary] = useState(0.00);
  const [address, setAddress] = useState("");
  const [designation, setDesignation] = useState("");
  const [empId, setEmpId] = useState("");
  const [dateOfHire, setDateOfHire] = useState(Date.now());

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const designationChangeHandler = (event) => {
    setDesignation(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const phoneChangeHandler = (event) => {
    setPhone(event.target.value);
  };
  const salaryChangeHandler = (event) => {
    setSalary(event.target.value);
  };
  const addressChangeHandler = (event) => {
    setAddress(event.target.value);
  };


  const onFormSubmit = e => {
    e.preventDefault()
    setDisable(true)

    const formData = {
      "Name": name,
      "Email": email,
      "Phone": phone,
      "ChargePH": salary,
      "Address": address,
      "Designation": designation,
      "Active": true,
      "DateOfHire": dateOfHire,
    }
    addData(formData)
    // console.log(formData);
    
  }
  const addData = async (formData) => {
    await  addNewEmployee(formData).then((res) => {  
      setEmpId(res); 
    });
  };

  const resetForm = () => {
    setName("");
    setAddress("");
    setEmail("");
    setDesignation("");
    setPhone("");
    setSalary(0)
    setEmpId("")
    setDateOfHire(null)
    setDisable(false)
  }
  return (
    <div className="pageview">
      <TopBar name="Add new Employee" />
      <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
      <Box  style={{ backgroundColor: "white", borderRadius: '5px', padding: '25px' }}>
      
        <Form onSubmit={onFormSubmit}>
          
          <Form.Group className="mb-3" controlId="fullname">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" value={name} onChange={nameChangeHandler} placeholder="Enter Full Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="dateofjoin">
            <Form.Label>Date Of Hire</Form.Label>
            <Form.Control type="date" value={dateOfHire} onChange={(e) => {setDateOfHire(e.target.value)}} placeholder="Enter Full Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" value={email} onChange={emailChangeHandler} placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="phonenumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" value={phone} onChange={phoneChangeHandler} placeholder="Enter Phone Number" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="salary">
            <Form.Label>Salary (per hour)</Form.Label>
            <Form.Control type="number" value={salary} onChange={salaryChangeHandler} placeholder="Enter Salary" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="salary">
            <Form.Label>Designation</Form.Label>
            <Form.Control type="text" value={designation} onChange={designationChangeHandler} placeholder="Enter designation" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" value={address} onChange={addressChangeHandler} placeholder="Enter Full Address" />
          </Form.Group>
          <Button disabled={disable} variant="primary" type="submit">
            Submit
          </Button>
          <Button style={{marginLeft: "10px"}} variant="warning" onClick={resetForm}>
            Reset Form Data
          </Button>
        </Form>
      </Box>
      </Grid>
      <Grid item xs={12} md={4}>
      <Box  style={{ backgroundColor: "white", borderRadius: '5px', padding: '25px' }}>
        <h5><strong>Generted QR Code</strong></h5>
        <p className={!empId? "visible" : "invisible"}>QR code for the employee will be generated here once it is added succcessfully.</p>
        <QRCode value={empId} className={empId? "visible" : "invisible"} />
        <p className={empId? "visible" : "invisible"}><strong>Name: {name}</strong><br></br>
        <strong>Phone: {phone}</strong><br></br>
        <strong>EmailID: {email}</strong></p>
        <Skeleton className={!empId? "visible" : "invisible"} variant="rectangular" width={210} height={210} />
        <Skeleton className={!empId? "visible" : "invisible"}/>
        <Skeleton className={!empId? "visible" : "invisible"}/>
        <Skeleton className={!empId? "visible" : "invisible"}/>
      </Box>
      </Grid>
      </Grid>
    </div>
  );
}

export default AddEmploy