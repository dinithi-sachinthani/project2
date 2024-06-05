import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${logo})` }}>
      <div className="headerContainer">
        <h1> Anything With Zee </h1>
        <p> Cake TO FIT ANY TASTE</p>
        <Link to="/categories">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
