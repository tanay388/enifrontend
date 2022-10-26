import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { validateUser } from "../Assets/Constants/Constants";
import DataBox from "../Components/Dashboard/DataBox";
import TopBar from "../Components/TopBar";
import IndividualSchedules from "./IndividualSchedules";

function DashBoard() {
  useEffect(() => {
    validateUser();
  }, [])


  
  
  return (
    <div className="pageview">
      <TopBar />
      <Box
        style={{
          backgroundColor: "white",
          borderRadius: "5px",
          padding: "25px",
          marginBottom: "60px"
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            color: "#00137b",
            fontWeight: "bold",
            marginBottom: "30px",
          }}
        >
          OverView
        </h2>

        <DataBox color={"#3744ff"} />
      </Box>

      <hr></hr>

      <div className="m--30px" style={{marginTop: "30px"}}>
      <IndividualSchedules  />

      </div>
      
    </div>
  );
}

export default DashBoard;
