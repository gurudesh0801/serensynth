import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/Images/Logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const gotoContact = () => {
    navigate("/contact");
  };

  return (
    <div className="navContainer">
      <nav>
        {/* Logo Section */}
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="LogoImg" />
          </Link>
        </div>

        {/* Navigation Items */}
        <div className={`nav_items ${isOpen ? "open" : ""}`}>
          <ul>
            <li className="list_element">
              <Link to="/">Home</Link>
            </li>
            <li className="list_element">
              <Link to="/who-we-are">Who we are</Link>
            </li>
            <li className="list_element">
              <Link to="/seren-media">Seren Media</Link>
            </li>
            <li className="list_element">
              <Link to="/glx">GLX</Link>
            </li>
            <li className="list_element">
              <Link to="/serenxcel">SerenXcel</Link>
            </li>
            <li className="list_element">
              <Link to="/careers">Careers</Link>
            </li>
            <li className="list_element">
              <Link to="/terms&conditions">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        {/* Call to Action Button */}
        <div className="ctaButton">
          <button onClick={gotoContact}>Consult With Us</button>
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
