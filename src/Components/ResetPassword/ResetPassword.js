import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { changePasswordAdmin } from '../../Api/api';
import ToastMessage from '../ToastMessage';

const ResetPassword = ({show, handleClose}) => {

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

    const [emailAdmin, setEmailAdmin] = useState(localStorage.getItem("userEmail"));
    const [passwordAdmin, setPasswordAdmin] = useState("");
    const [newpasswordAdmin, setNewPasswordAdmin] = useState("");
    const [newpasswordAdmin2, setNewPasswordAdmin2] = useState("");
  
    const newChangeHandler = (event) => {
        setNewPasswordAdmin(event.target.value);
    };
    const newChangeHandler2 = (event) => {
        setNewPasswordAdmin2(event.target.value);
    };
    
    const emailChangeHandler = (event) => {
      setEmailAdmin(event.target.value);
    };
  
    
    const passwordChangeHandler = (event) => {
      setPasswordAdmin(event.target.value);
    };
  
    const onFormSubmit = async (e) => {
      e.preventDefault()
  
      if(!newpasswordAdmin || !newpasswordAdmin2 || !emailAdmin || !passwordAdmin){
        window.alert("Please Fill all Data");
        return;
      }

      if(newpasswordAdmin !== newpasswordAdmin2){
        window.alert("New Password and Confirm password must be same.");
        return;
      }

      if(newpasswordAdmin.length <8){
        window.alert("New Password must be atleast 8 digit long.");
        return;
      }
      
      setDisable(true)
  
      const formData = {
        "newPassword": newpasswordAdmin2,
        "email": emailAdmin,
        "password": passwordAdmin,
      }
      // addData(formData)
      changePasswordMethod(formData);
      console.log(formData);
      
    }
  
    const resetForm = () => {
        setNewPasswordAdmin("");
        setNewPasswordAdmin2("");
    //   setEmailAdmin("");
      setPasswordAdmin("");
      setDisable(false)
    }

    const changePasswordMethod = async (data) => {
        await changePasswordAdmin(data).then((res) => {
            if (res === 200) {
                setAlertMessage("Password Changed Successfully");
                setAlertColor("success");
                handleClickAlert();
                resetForm();
                
              } else {
                setAlertMessage("Failed to change password.");
                setAlertColor("warning");
                handleClickAlert();
              }
        })
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

          <Modal.Header>Change Your Current Password</Modal.Header>
          
          <Modal.Body>
          <Form onSubmit={onFormSubmit}>
          
          <Form.Group className="mb-3" controlId="emailadmin">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" value={emailAdmin} onChange={emailChangeHandler} placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="passwordadmin">
            <Form.Label>Current PassWord</Form.Label>
            <Form.Control type="password" value={passwordAdmin} onChange={passwordChangeHandler} placeholder="Enter Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="passwordadmin">
            <Form.Label>New PassWord</Form.Label>
            <Form.Control type="password" value={newpasswordAdmin} onChange={newChangeHandler} placeholder="Enter new Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="passwordadmin">
            <Form.Label>Confirm new PassWord</Form.Label>
            <Form.Control type="password" value={newpasswordAdmin2} onChange={newChangeHandler2} placeholder="Confirm Password" />
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

export default ResetPassword