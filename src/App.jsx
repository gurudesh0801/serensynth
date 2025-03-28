import React from "react";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import HelpYouAchive from "./Components/HelpYouAchive/HelpYouAchive";
import Section3 from "./Components/Section3/Section3";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HelpYouAchive />
      <Section3 />
      <Footer />
    </>
  );
};

export default App;
