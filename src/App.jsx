import React from "react";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import HelpYouAchive from "./Components/HelpYouAchive/HelpYouAchive";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HelpYouAchive />
    </>
  );
};

export default App;
