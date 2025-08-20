import React from "react";
import Hero from "../components/Hero";
import cocoaImage from "../assets/images/home-cocoa.jpg"; 
import MiniAbout from "../components/MiniAbout";
import RainForest from "../components/RainForest"
import MiniServices from "../components/MiniServices"
import ProductsSection from "../components/ProductsSection";
import SustainabilitySection from "../components/SustainabilitySection";

const Home = () => {
  return (
    <>
      <Hero
  title="Premium Cocoa for the World"
  subtitle="Delivering quality and sustainability from farm to factory."
  image={cocoaImage}
  isHome={true}
/>

<MiniAbout/>
<RainForest/>
 <MiniServices />
<ProductsSection/>
<SustainabilitySection/>    
    </>
  );
};

export default Home;
