import React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Avatar } from "@mui/material";
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Chip from '@mui/material/Chip';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

function UserCardPopover({
  open,
  anchorEl,
  handlePopoverClose,
  name,
  designation,
  email,
  phone,
  isLoggedin,
}) {
  const idx = open ? 'simple-popover' : undefined;
  return (
    <div>
      <Popover
        id={idx}
        // sx={{
        //   pointerEvents: "none",
        // }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Card>
          <CardContent style={{display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center"}}>
            <div style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
              {/* <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              > */}
                <Avatar
                  alt={name}
                  src={`https://ui-avatars.com/api/?name=${name}&color=7F9CF5&background=EBF4FF`}
                />
              {/* </StyledBadge> */}
              
            </div>

            <Typography variant="h5" style={{fontSize: "18px",marginTop: "10px", color: "rgb(0, 37, 51)"}} component="div">
              {name}
            </Typography>
            <Chip label={designation} />

            <a href={"mailto:"+email}>{email}</a>
            <a href={"tel:"+phone}>{phone}</a>
            
          </CardContent>
        </Card>
      </Popover>
    </div>
  );
}

export default UserCardPopover;
