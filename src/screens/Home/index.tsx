import React from "react";
import About from "./About";
import Hero from "./Hero";
import Newsletter from "../Contact/Newsletter";
import Vehicles from "./Vehicles";
import WhyChoose from "./WhyChoose";


const Index = () => {
  return (
    <>
      <Hero />
      <About />
      <Vehicles />
      <WhyChoose />
      <Newsletter />
    </>
  );
};

export default Index;
