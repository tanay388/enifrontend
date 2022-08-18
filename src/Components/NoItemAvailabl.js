import React from 'react'
import {Image} from 'react-bootstrap'
import notFoundImage from '../Assets/Images/nothingfound.png'

function NoItemAvailabl() {
  return (
    <div style={{width: '100%', display: 'flex', justifyContent:"center"}}>
      <Image src={notFoundImage} style={{maxHeight:"70vh"}}/>
    </div>
  )
}

export default NoItemAvailabl