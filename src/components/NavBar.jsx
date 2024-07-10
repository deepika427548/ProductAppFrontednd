import React from "react";
import "../components/Navbar.css";
import { Box, Stack, Typography } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { userAuthStore } from "../store/authstore";
import { toast } from "react-toastify";

export default function NavBar() {
  const { loggedOut } = userAuthStore();
  const navigate = useNavigate();

  const toLogin = () => {
    loggedOut(); //token will be removed from local storage if logged out
    toast.info("logout successfully");

    navigate("/login");
  };

  return (
    <>
      <Box
        component="section"
        sx={{ p: 2, border: "2px soild grey", backgroundColor: "#663399" }}
      >
        <Stack direction="row" justifyContent="space-around">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Typography variant="h6" sx={{ color: "white", cursor: "pointer" }}>
              Home
            </Typography>
          </Link>
          <Link to={"/addproduct"} style={{ textDecoration: "none" }}>
            <Typography variant="h6" sx={{ color: "white", cursor: "pointer" }}>
              Add Product
            </Typography>
          </Link>

          <Typography
            variant="h6"
            sx={{ color: "white", cursor: "pointer" }}
            onClick={toLogin}
          >
            Logout
          </Typography>
        </Stack>
      </Box>
    </>
  );
}
