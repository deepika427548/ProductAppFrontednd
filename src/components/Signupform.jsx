import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useLoginStore from "../store/login-store";

export default function Signupform() {
  const { setToggle } = useLoginStore();

  return (
    <div>
      <Container>
        <Box height={400} width={400} m={4}>
          <Typography variant="h3" align="center" sx={{ marginY: 3 }}>
            Sign Up
          </Typography>
          <Stack spacing={2}>
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField
              id="outlined-basic"
              label="New Password"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Confirm Password"
              variant="outlined"
            />
            <Button variant="contained">Sign Up</Button>
          </Stack>
          <Typography align="center" varient="subtitle1">
            Already exist?
            <Link onClick={setToggle} style={{ textDecoration: "none" }}>
              Login here
            </Link>
          </Typography>
        </Box>
      </Container>
      ;
    </div>
  );
}
