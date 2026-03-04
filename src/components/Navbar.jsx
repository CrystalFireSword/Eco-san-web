import React, { useState } from "react";
import "../styles.css";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (id) => {
    setIsOpen(false); // Close menu
    
    // If we're already on the homepage and trying to scroll to a section
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If we're on another page, navigate to home with the hash
      navigate(`/#${id}`);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li onClick={() => handleLinkClick("home")}>Home</li>
        <li onClick={() => handleLinkClick("about")}>About</li>
        <li onClick={() => handleLinkClick("our-work")}>Our Work</li>
        <li onClick={() => handleLinkClick("supported-by")}>Supported By</li>
        <li>
          <Link to="/team" onClick={() => setIsOpen(false)}>
            Our Team
          </Link>
        </li>
        <li onClick={() => handleLinkClick("contact")}>Contact Us</li>
      </ul>
      <button className="toggle-btn" onClick={toggleMenu}>
        &#9776;
      </button>
    </nav>
  );
};

export default Navbar;
