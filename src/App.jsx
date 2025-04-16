import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import HelpYouAchive from "./Components/HelpYouAchive/HelpYouAchive";
import Section3 from "./Components/Section3/Section3";
import Footer from "./Components/Footer/Footer";
import TermsAndConditions from "./Components/Terms&Conditions/TermsAndConditions";
import ContactUs from "./Components/ContactUs/ContactUs";
import WhoWeAre from "./Components/WhoWeAre/WhoWeAre";

const Home = () => {
  return (
    <>
      <Hero />
      <HelpYouAchive />
      <Section3 />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms&conditions" element={<TermsAndConditions />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
