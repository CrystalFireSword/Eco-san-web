import React, { useState } from "react";
import "../styles.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li onClick={() => scrollToSection("home")}>Home</li>
        <li onClick={() => scrollToSection("about")}>About</li>
        <li onClick={() => scrollToSection("our-work")}>Our Work</li>
        <li onClick={() => scrollToSection("our-team")}>Our Team</li>
        <li onClick={() => scrollToSection("contact")}>Contact Us</li>
      </ul>
      <button className="toggle-btn" onClick={toggleMenu}>
        &#9776;
      </button>
    </nav>
  );
};

export default Navbar;
