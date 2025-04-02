import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <div className="contact-box">
        {/* Left Side - Contact Info */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Say something to start a live chat!</p>
          <div className="contact-detail">
            <FaPhone className="contact-icon" />
            <span>+91 8062179313</span>
          </div>
          <div className="contact-detail">
            <FaEnvelope className="contact-icon" />
            <span>assist@serensynthlabs.com</span>
          </div>
          <div className="contact-detail">
            <FaMapMarkerAlt className="contact-icon" />
            <span>
              301,BALEWADI PLAZA,NEAR MITCON INSTITUTE,BALEWADI, PUNE CITY,
              MAHARASHTRA, PIN: 411045
            </span>
          </div>
          <div className="contact-detail">
            <span>
              Operational Address : Flat No 18, 5th Floor, Mahalaxmi Down Town,
              Savarkar Nagar, Gangapur Road, Udhoji Maratha Boarding, Nashik,
              Nashik, Maharashtra, India, 422007
            </span>
          </div>
          <div className="contact-social">
            <FaInstagram className="social-icon" />
            <FaTwitter className="social-icon" />
            <FaDiscord className="social-icon" />
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" placeholder="First Name" />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" placeholder="Last Name" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="abc@123gmail.com" />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="1234567890" />
            </div>
          </div>

          <div className="form-group">
            <label>Select Subject?</label>
            <div className="radio-group">
              <input type="radio" name="subject" />
              <input type="radio" name="subject" />
              <input type="radio" name="subject" />
              <span>Other</span>
            </div>
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Write your message.."></textarea>
          </div>

          <div class="contact-btn-container">
            <button class="contact-btn">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
