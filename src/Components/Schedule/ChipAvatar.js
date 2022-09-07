import { Avatar, Chip } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getByEmployeeID } from '../../Api/api';
import UserCardPopover from './UserCardPopover';

const ChipAvatar = ({empIDSingle, handleDelete}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const [name, setName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [empEmail, setEmpEmail] = useState("");
  const [designation, setDesignation] = useState("");
  const [empPhone, setEmpPhone] = useState("");
    useEffect(() => {
        getSingleData()
    }, )
    
    const getSingleData = async () => {
        await getByEmployeeID(empIDSingle).then((res) => {
            setName(res.data.Name);
      setEmpEmail(res.data.Email);
      setEmpPhone(res.data.Phone);
      setIsLoggedIn(res.data.Logged);
      setDesignation(res.data.Designation);
        })
    }
  return (
    <>
    <Chip onClick={handleClick} size="small" label={name} onDelete={ () => {handleDelete(empIDSingle)}} avatar={<Avatar alt={name} src={`https://ui-avatars.com/api/?name=${name}&color=7F9CF5&background=EBF4FF`} />} />
    
    <UserCardPopover
          anchorEl={anchorEl}
          handlePopoverClose={handleClose}
          open={open}
          name={name}
          phone={empPhone}
          email={empEmail}
          designation={designation}
          isLoggedin={isLoggedIn}
        />
        
    </>
  )
}

export default ChipAvatar