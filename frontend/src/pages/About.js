import React from "react";
import "./About.css";
import Slider from "../components/Image-slider/Slider";

function About() {
  return (
    <div>
      <h1>Hello from about</h1>
      <div className="wrap">
        <Slider />
      </div>
    </div>
  );
}

export default About;
