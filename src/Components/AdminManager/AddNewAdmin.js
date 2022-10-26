
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addNewAdmin } from '../../Api/api';
import ToastMessage from '../ToastMessage';


const AddNewAdmin = ({show, handleClose}) => {

  // Toast message
  const [openAlert, setOpenAlert] = useState(false);
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

  const [disable, setDisable] = useState(false);

  const [nameAdmin, setNameAdmin] = useState("");
  const [emailAdmin, setEmailAdmin] = useState("");
  const [passwordAdmin, setPasswordAdmin] = useState("");

  const nameChangeHandler = (event) => {
    setNameAdmin(event.target.value);
  };
  
  const emailChangeHandler = (event) => {
    setEmailAdmin(event.target.value);
  };

  
  const passwordChangeHandler = (event) => {
    setPasswordAdmin(event.target.value);
  };

  const onFormSubmit = async (e) => {
    e.preventDefault()

    if(!nameAdmin || !emailAdmin || !passwordAdmin){
      window.alert("Please Fill all Data");
      return;
    }
    
    setDisable(true)

    const formData = {
      "name": nameAdmin,
      "email": emailAdmin,
      "password": passwordAdmin,
    }
    addDataRegister(formData)
    console.log(formData);
    
  }

  const addDataRegister = async (data) => {
    await addNewAdmin(data).then((res) => {
      if (res === 200) {
        setAlertMessage("Account Created Sucessfully.");
        setAlertColor("success");
        handleClickAlert();
        handleClose();
        setTimeout(() => {  window.location.reload(); }, 2000);
        
      } else {
        setAlertMessage("Failed to Create Account.");
        setAlertColor("warning");
        handleClickAlert();
        setDisable(false)
      }
    })
  }

  const resetForm = () => {
    setNameAdmin("");
    setEmailAdmin("");
    setPasswordAdmin("");
    setDisable(false)
  }
  return (
    <div>
      <ToastMessage
          openAlert={openAlert}
          handleCloseAlert={handleCloseAlert}
          alertColor={alertColor}
          alertMessage={alertMessage}
        />
      <Modal
        centered
        show={show}
        onHide={handleClose}
        style={{ zIndex: "1203", marginTop: "40px", padding: "30px !important" }}>

          <Modal.Header>Add New Admin</Modal.Header>
          
          <Modal.Body>
          <Form onSubmit={onFormSubmit}>
          
          <Form.Group className="mb-3" controlId="nameadmin">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={nameAdmin} onChange={nameChangeHandler} placeholder="Enter Full Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="emailadmin">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" value={emailAdmin} onChange={emailChangeHandler} placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="passwordadmin">
            <Form.Label>PassWord</Form.Label>
            <Form.Control type="password" value={passwordAdmin} onChange={passwordChangeHandler} placeholder="Enter Password" />
          </Form.Group>
          <Button disabled={disable} variant="primary" type="submit">
            Submit
          </Button>
          <Button style={{marginLeft: "10px"}} variant="warning" onClick={resetForm}>
            Reset Form Data
          </Button>
        </Form>
          </Modal.Body>
          

      </Modal>
    </div>
  )
}

export default AddNewAdmin