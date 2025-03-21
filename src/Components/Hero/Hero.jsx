import React from "react";
import "./Hero.css";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="container">
      <div className="heroContainer">
        <div className="mainHeading">
          <h1>
            Empowering SME & D2C Brands with scalable E-Commerce & Marketing
            Solution
          </h1>
          <p>
            From logistics to digital growth we manage everything you need to
            scale your business
          </p>
          <button className="heroBtn">
            Explore Our Solution
            <span>
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
