import React from "react";
import '../assets/styles/hero.css';
import { Link } from "react-router-dom";


const Hero = ({ title, subtitle, image, isHome }) => {
  return (
    <section
      className={`hero ${isHome ? "home-hero" : "page-hero"}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {isHome && (
          <Link to="/about" className="hero-button">
            About Us
          </Link>
        )}
      </div>
    </section>
  );
};

export default Hero;
