import React from "react";
import heroPhoto from "../assets/img/grid-photo.jpg";
const Hero = () => {
  return (
    <div>
      <section className="hero">
        <img src={heroPhoto} alt="heroPhoto" className="hero-photo" />
      </section>
      <h1 className="hero-title">Online Experiences</h1>
      <p className="hero-text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
};

export default Hero;
