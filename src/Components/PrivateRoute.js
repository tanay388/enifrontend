import React, { useEffect } from 'react'
import { Navigate} from 'react-router';
import { verifyUserToken } from '../Api/api';

const PrivateRoute = ({children}) => {
    const token = localStorage.getItem("token");
    
    // useEffect(() => {
    //   verifyUser()
    // }, [])

    // const verifyUser = async () => {
    //   if(token){
    //     await verifyUserToken(token).then((res) => {
    //       if(res===200){

    //       }else{
    //         // window.alert("Invalid token please login again. Note: You cn be only logged in at one place.");
    //         localStorage.deleteItem("token")
    //         console.log(res)
    //         window.location.reload();

    //       }

    //     })

    //   }

    // }

  if (!token) {
    window.location.pathname = "/"
      // return <Navigate to="/" />
  }
    
  return <>{children} </>
} 

export default PrivateRoute