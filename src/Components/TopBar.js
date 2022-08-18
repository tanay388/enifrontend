import { padding } from '@mui/system'
import React from 'react'

function TopBar(props) {
  return (
    <div style={{display: "flex"}}>

        <h6 style={{marginTop: "20px", marginBottom: "20px"}}>{props.name}</h6>
    </div>
  )
}

export default TopBar