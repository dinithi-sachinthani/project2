import React from "react";
import cake1 from "../assets/cake1.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${cake1})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          The "Cake and Gift Hampers Selling System” is a project aimed to
          develop an innovative online platform in collaboration with "Anything
          with Zee," a local cake and gift hampers business in Kelaniya. This
          website is going to be designed to revolutionize the traditional cake
          and gift hampers shopping experience through simplifying and enhancing
          the cake shopping experience for customers. Partnering with "Anything
          with Zee", our project aims to develop a user-friendly website where
          customers can effortlessly explore, customize, and order cakes and
          gift hampers for various occasions.
        </p>
      </div>
    </div>
  );
}

export default About;
