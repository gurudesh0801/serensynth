import React, { useEffect } from "react";
import "./WhoWeAre.css";
import aboutImg1 from "../../assets/Images/aboutImg.png";
import aboutImg2 from "../../assets/Images/aboutImg2.png";
import AOS from "aos";
import "aos/dist/aos.css";

const WhoWeAre = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="aboutContainer">
      <div className="aboutHero" data-aos="fade-down">
        <div>
          <h1>Who We Are</h1>
          <p>
            From preschool to pre-tertiary, our students enjoy fun, interactive
            and relevant lessons and are empowered to think beyond the confines
            of the classroom.
          </p>
          <button className="about-btn">See More</button>
        </div>
      </div>

      <div className="services" data-aos="fade-up">
        <h1>Services</h1>

        <div className="services1">
          <div className="leftSide" data-aos="fade-right">
            <h3>Developing Confident and Successful Learners</h3>
            <p>
              We help students build confidence through active learning and
              skill-building that fosters long-term growth.
            </p>
            <button>View More</button>
          </div>
          <div className="rightSide" data-aos="fade-left">
            <img src={aboutImg1} alt="Service 1" />
          </div>
        </div>

        <div className="services2">
          <div className="leftSide" data-aos="fade-right">
            <img src={aboutImg2} alt="Service 2" />
          </div>
          <div className="rightSide" data-aos="fade-left">
            <h3>Enjoy Learning with a Unique Classroom Experience</h3>
            <p>
              Our classrooms provide an engaging environment designed to spark
              creativity, curiosity, and collaboration.
            </p>
            <button>View More</button>
          </div>
        </div>

        <div className="services3">
          <div className="leftSide" data-aos="fade-right">
            <h3>Passionate Teachers That Make a Difference</h3>
            <p>
              Our educators are more than just teachers—they are mentors,
              motivators, and changemakers.
            </p>
            <button>View More</button>
          </div>
          <div className="rightSide" data-aos="fade-left">
            <img src={aboutImg1} alt="Service 3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
