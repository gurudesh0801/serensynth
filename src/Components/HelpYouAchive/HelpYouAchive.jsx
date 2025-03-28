import React from "react";
import { FaArrowRight } from "react-icons/fa";
import img from "../../assets/Images/image1.png";
import "./HelpYouAchive.css";

const HelpYouAchive = () => {
  return (
    <>
      <div className="container2">
        <div className="secContainer">
          <div className="firstCont">
            <h1>What we can help you achieve ?</h1>
            <button>
              Lets’s get to work &nbsp;
              <span>
                <FaArrowRight />
              </span>
            </button>
          </div>

          <div className="secCont">
            <h1>Let's Grow Together</h1>
            <button>
              Lets’s get to work &nbsp;
              <span>
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>

        <div className="thirdCont">
          <h1>Sectors We Serve</h1>

          <div className="items">
            <ul>
              <li>E-Commerce</li>
              <li>Logistics</li>
              <li>Media</li>
            </ul>
            <ul>
              <li>Consumers Products</li>
              <li>Retail</li>
              <li>Manufacturing</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpYouAchive;
