import React from "react";
import Hero from "../components/Hero";
import cocoaImage from "../assets/images/home-cocoa.jpg"; 
import AboutSection from "../components/AboutSection";
import MiniServices from "../components/ServicesSection";
import CommitmentSection from "../components/CommitmentSection";

const Home = () => {
  return (
    <>
      <Hero
  title="Premium Cocoa for the World"
  subtitle="With over 30 years of expertise, Ennys Trading Company connects Nigeria's finest
   cashew nuts and cocoa beans to global markets through sustainable and ethical practices."
  image={cocoaImage}
  isHome={true}
/>

<AboutSection/>
 <MiniServices />
<CommitmentSection/>    
    </>
  );
};

export default Home;
