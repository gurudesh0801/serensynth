import React from "react";
import { FaArrowRight } from "react-icons/fa";
import img from "../../assets/Images/image1.png";
import "./HelpYouAchive.css";

const HelpYouAchive = () => {
  return (
    <>
      <div className="secContainer">
        <div className="textCont">
          <h1>What we can help you achieve ?</h1>
          <p>
            Unlock Growth, Upskill & Scale with Us! <br /> We offer
            comprehensive solutions in business acceleration, <br />
            technology enablement, eCommerce, logistics, and career <br />
            advancement. Whether you're an entrepreneur, professional, or <br />
            startup, we have the expertise to drive your success.
          </p>
          <button>
            Lets’s get to work
            <span>
              <FaArrowRight />
            </span>
          </button>
        </div>

        <div className="imgCont">
          <img src={img} alt="" />
        </div>
      </div>
    </>
  );
};

export default HelpYouAchive;
