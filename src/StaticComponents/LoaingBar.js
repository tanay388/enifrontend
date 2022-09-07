import React from 'react'

const LoaingBar = ({isloading}) => {

  return (
    <>
        <LinearProgress className={isloading ? "visible": "invisible"} color="inherit" />
    </>
  )
}

export default LoaingBar