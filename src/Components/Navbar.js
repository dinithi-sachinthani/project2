import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftside" id={openLinks ? "open" : "close"}>
        <div className="hiddenLinks">
          <Link to="/">Home </Link>
          <Link to="/ContactUs">ContactUs </Link>
          <Link to="/Login">Login </Link>
          <Link to="/Categories">Categories </Link>
        </div>
      </div>
      <div className="rightside">
        <Link to="/">Home </Link>
        <Link to="/About Us">About Us </Link>
        <Link to="/Contact Us">Contact Us </Link>
        <Link to="/Login">Login </Link>
        <Link to="/Categories">Categories </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
