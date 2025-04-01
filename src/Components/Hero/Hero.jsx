import React, { useEffect, useRef } from "react";
import "./Hero.css";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const heroRef = useRef(null);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="container">
      <div className="heroContainer hidden" ref={heroRef}>
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
