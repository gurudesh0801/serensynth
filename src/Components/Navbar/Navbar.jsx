import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/Images/Logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navContainer">
      <nav>
        {/* Logo Section */}
        <div className="logo">
          <img src={Logo} alt="LogoImg" />
        </div>

        {/* Navigation Items */}
        <div className={`nav_items ${isOpen ? "open" : ""}`}>
          <ul>
            <li className="list_element">Home</li>
            <li className="list_element">Who we are</li>
            <li className="list_element">Seren Media</li>
            <li className="list_element">GLX</li>
            <li className="list_element">SerenXcel</li>
            <li className="list_element">Careers</li>
          </ul>
        </div>

        {/* Call to Action Button */}
        <div className="ctaButton">
          <button>Consult With Us</button>
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
