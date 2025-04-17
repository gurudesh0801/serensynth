import React, { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
// import img from "../../assets/Images/image1.png";
import "./HelpYouAchive.css";

const HelpYouAchieve = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".hidden");
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (sectionRef.current) {
        const elements = sectionRef.current.querySelectorAll(".hidden");
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <>
      <div className="container2" ref={sectionRef}>
        <div className="secContainer">
          <div className="firstCont hidden">
            <h1>What we can help you achieve ?</h1>
            <button>
              Let’s get to work &nbsp;
              <span>
                <FaArrowRight />
              </span>
            </button>
          </div>

          <div className="secCont hidden">
            <h1>Let's Grow Together</h1>
            <button>
              Let’s get to work &nbsp;
              <span>
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>

        <div className="thirdCont hidden">
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

export default HelpYouAchieve;
