import React from "react";
const Hero = () => {
  return (
    <div>
      <section className="hero">
        <img
          src="../assets/img/grid-photo.jpg"
          alt="heroPhoto"
          className="hero-photo"
        />
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
