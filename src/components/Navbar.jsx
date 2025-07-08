import React, { useState } from "react";
import "../styles.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`; // Navigate to homepage and target section
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false); // Close menu if open
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
        <li onClick={() => scrollToSection("supported-by")}>Supported By</li>
        <li>
          <Link to="/team" onClick={() => setIsOpen(false)}>
            Our Team
          </Link>
        </li>
        <li onClick={() => scrollToSection("contact")}>Contact Us</li>
      </ul>
      <button className="toggle-btn" onClick={toggleMenu}>
        &#9776;
      </button>
    </nav>
  );
};

export default Navbar;
