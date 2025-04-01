import React from "react";
import "./ContactUs.css";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitter,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <>
      <div className="contactContainer">
        <h1 className="contactHeader">Contact Us</h1>
        <div className="mainContainer">
          <div className="leftCont">
            <h1>Contact Information</h1>
            <p>Say something to start a live chat!</p>
            <div className="network">
              <p>
                <span>
                  <FaPhone />
                </span>
                &nbsp; +91 8062179313
              </p>
              <p>
                <span>
                  <FaEnvelope />
                </span>
                &nbsp; assist@serensynthlabs.com
              </p>
              <p>
                <span>
                  <FaMapMarkerAlt />
                </span>
                &nbsp; 301,BALEWADI PLAZA,NEAR MITCON INSTITUTE,BALEWADI, PUNE
                CITY, MAHARASHTRA, PIN: 411045
                <br />
                <br />
                Operational Address : Flat No 18, 5th Floor, Mahalaxmi Down
                Town, Savarkar Nagar, Gangapur Road, Udhoji Maratha Boarding,
                Nashik, Nashik, Maharashtra, India, 422007
              </p>

              <div className="social-icons">
                <span>
                  <FaTwitter />
                </span>
                <span>
                  <FaInstagram />
                </span>
                <span>
                  <FaDiscord />
                </span>
              </div>
            </div>
          </div>
          <div className="rightCont">
            <form action="#">
              <div className="formContainer">
                <div className="firstContainer">
                  <div>
                    <label htmlFor="FirstName">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="Sakshi"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="ABC"
                    />
                  </div>
                </div>
                <div className="secondContainer">
                  <div>
                    <label htmlFor="emil">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="abc@gmail.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="PhoneNo">Phone Number</label>
                    <input
                      type="text"
                      name="phoneNo"
                      id="phoneNo"
                      placeholder="1234567890"
                    />
                  </div>
                </div>
                <div className="selectDiv">
                  <h5>Select Subject?</h5>
                  <div className="options">
                    <input type="radio" name="option" />
                    <input type="radio" name="option" />

                    <label htmlFor="other">
                      <input type="radio" name="option" />
                      &nbsp; other
                    </label>
                  </div>
                </div>
                <div className="thirdContainer">
                  <div>
                    <label htmlFor="Message">Message</label>
                    <input
                      type="text"
                      name="message"
                      id="message"
                      placeholder="Write a Message"
                    />
                  </div>
                </div>
              </div>
              <div className="contact-btn-container">
                <button className="contact-btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
