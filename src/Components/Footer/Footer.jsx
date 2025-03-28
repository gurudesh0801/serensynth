import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Section 1 */}
          <div className="footer-section">
            <h4>Follow us on</h4>
            <div className="social-icons">
              <FaFacebookF />
              <FaLinkedinIn />
              <FaInstagram />
              <FaXTwitter />
            </div>
          </div>

          {/* Section 2 */}
          <div className="footer-links">
            <div>
              <h4>Home</h4>
              <ul>
                <li>Seren Media</li>
                <li>SerenXcel</li>
                <li>Privacy & Policy</li>
              </ul>
            </div>

            <div>
              <h4>Who we Are</h4>
              <ul>
                <li>Careers</li>
                <li>GLX</li>
                <li>Support</li>
              </ul>
            </div>

            <div>
              <h4>Term & Conditions</h4>
              <ul>
                <li>Address: Abc Pune 411 002</li>
                <li>Gmail: abc@gmail.com</li>
                <li>Mob No: 0000*******</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footer-bottom">
          <p>
            Copyrights Serensynth Labs Private Limited © All Rights Reserved
            2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
