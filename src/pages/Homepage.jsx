import React from "react";
import NavBar from "../components/NavBar.jsx";
import MyTable from "../components/MyTable.jsx";
import { Box, Container, Paper } from "@mui/material";
// import Paper from "@mui/material/Paper";

export default function Homepage() {
  return (
    <div>
      <NavBar />
      <Container>
        <Box sx={{ margin: 5 }}>
          <Paper elevation={24}>
            <MyTable />
          </Paper>
        </Box>
      </Container>
    </div>
  );
}
