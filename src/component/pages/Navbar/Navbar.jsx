import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar">
      <span className="nav-logo">DILANGO</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to="home" smooth={true} duration={500}>Home</Link>
        <Link to="drivers" smooth={true} duration={500}>Drivers</Link>
        <Link to="gallery" smooth={true} duration={500}>Gallery</Link>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
