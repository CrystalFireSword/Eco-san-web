import React from "react";
import "../styles.css";

const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <ul>
        <li onClick={() => scrollToSection("home")}>Home</li>
        <li onClick={() => scrollToSection("about")}>About</li>
        <li onClick={() => scrollToSection("our-work")}>Our Work</li>
        <li onClick={() => scrollToSection("our-team")}>Our Team</li>
        <li onClick={() => scrollToSection("contact")}>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;