import React from "react";
import logo from "../assets/img/logo.png";
const Navbar = () => {
  return (
    <div>
      <nav>
        <img src={logo} alt="logo" className="logo" />
      </nav>
    </div>
  );
};

export default Navbar;
