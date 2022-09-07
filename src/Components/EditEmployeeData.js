import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Grid } from "@mui/material";
import { updateEmployee } from "../Api/api";
import ToastMessage from "./ToastMessage";


function EditEmployeeData({ show, handleClose, userData }) {

  // Toast message
  const [openAlert, setOpenAlert] = React.useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertColor, setAlertColor] = useState("success");
  const handleClickAlert = () => {
    setOpenAlert(true);
  };
  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  const [name, setName] = useState(userData.Name);
  const [email, setEmail] = useState(userData.Email);
  const [phone, setPhone] = useState(userData.Phone);
  const [salary, setSalary] = useState(userData.ChargePH);
  const [address, setAddress] = useState(userData.Address);
  const [designation, setDesignation] = useState(userData.Designation);

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

  const onFormSubmit = (e) => {
    e.preventDefault();

    const formData = {
      Name: name,
      Email: email,
      Phone: phone,
      ChargePH: salary,
      Address: address,
      Designation: designation,
    };
    updateData(userData._id, formData);
  };

  const updateData = async (id, formData) => {
    await updateEmployee(id, formData).then((res) => {
      if (res === 200) {
        setAlertMessage("Edited Succesfully!");
        setAlertColor("success");
        handleClickAlert();
        setTimeout(() => {  window.location.reload(); }, 2000);
      } else {
        setAlertMessage("Failed");
        setAlertColor("warning");
        handleClickAlert();
      }
    });
  };

  return (
    <>
      <Modal
        centered
        show={show}
        size="lg"
        onHide={handleClose}
        style={{ zIndex: "1203", marginTop: "40px" }}
      >
        <ToastMessage
          openAlert={openAlert}
          handleCloseAlert={handleCloseAlert}
          alertColor={alertColor}
          alertMessage={alertMessage}
        />

        <Modal.Header closeButton>
          <Modal.Title>Edit Employee: {name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onFormSubmit}>
            <Grid container spacing={1}>
              <Grid item sm={6}>
                <Form.Group className="mb-3" controlId="fullname">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={nameChangeHandler}
                    placeholder="Enter Full Name"
                  />
                </Form.Group>
              </Grid>
              <Grid item sm={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={emailChangeHandler}
                    placeholder="Enter email"
                  />
                </Form.Group>
              </Grid>
              <Grid item sm={6}>
                <Form.Group className="mb-3" controlId="phonenumber">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    value={phone}
                    onChange={phoneChangeHandler}
                    placeholder="Enter Phone Number"
                  />
                </Form.Group>
              </Grid>

              <Grid item sm={6}>
                <Form.Group className="mb-3" controlId="salary">
                  <Form.Label>Salary (per hour)</Form.Label>
                  <Form.Control
                    type="number"
                    value={salary}
                    onChange={salaryChangeHandler}
                    placeholder="Enter Salary"
                  />
                </Form.Group>
              </Grid>
            </Grid>

            <Form.Group className="mb-3" controlId="address">
              <Form.Label>Designation</Form.Label>
              <Form.Control
                type="text"
                value={designation}
                onChange={designationChangeHandler}
                placeholder="Ex: Manager"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                value={address}
                onChange={addressChangeHandler}
                placeholder="Enter Full Address"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default EditEmployeeData;
