import React from 'react'
import Notfound from '../Assets/Images/404_page_cover.jpg'

const NotFoundPage = () => {
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
        <img src={Notfound} alt="404 Error. Page not found." style={{height: "100vh"}} />
    </div>
  )
}

export default NotFoundPage