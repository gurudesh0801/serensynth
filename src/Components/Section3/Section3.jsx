import React, { useEffect, useRef } from "react";
import "./Section3.css";

const Section3 = () => {
  const launchpadRef = useRef(null);
  const boxesRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2, // Trigger when 20% is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    if (launchpadRef.current) observer.observe(launchpadRef.current);
    boxesRef.current.forEach((box) => {
      if (box) observer.observe(box);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Launchpad Section */}
      <div className="container3">
        <div className="launchpad hidden" ref={launchpadRef}>
          <h1>SerenSynth Launchpad</h1>
          <div className="launchpadDiv">
            <button aria-label="Join the SerenSynth waitlist">
              Join Waitlist
            </button>
          </div>
        </div>
      </div>

      {/* Transformation Section */}
      <div className="secDiv">
        <h1>Transformation We’ve Driven</h1>
        <div className="boxes">
          {[
            "$2N GNU",
            "GLX: 96% Succession Rate",
            "15+ Ecosystem Partners",
          ].map((text, index) => (
            <div
              className={`box${index + 1} hidden`}
              ref={(el) => (boxesRef.current[index] = el)}
              key={index}
            >
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Section3;
