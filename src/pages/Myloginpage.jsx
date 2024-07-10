import React from "react";
import Myloginform from "../components/Myloginform";
import Signupform from "../components/Signupform";
import useLoginStore from "../store/login-store";
import { Box } from "@mui/material";

export default function Myloginpage() {
  const { isToggle } = useLoginStore();

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
      // sx={{
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
      >
        {isToggle ? <Myloginform /> : <Signupform />}
      </Box>
    </div>
  );
}
