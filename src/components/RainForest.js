import React from 'react';
import '../assets/styles/global.css';
import cocoaImage from '../assets/images/eglogo-stacked-dark.png'; 

const RainforestCertification = () => {
  return (
    <section className="rainforest-section">
      <div className="rainforest-content">
        <div className="text-section">
          <h2>
            Ennys Group is <span className="highlight">Rainforest Alliance Certified</span> on Cocoa Bean
          </h2>
          <p>
            The Rainforest Alliance certification is a well-respected and globally recognized label that is awarded to
            companies that meet strict standards of sustainability, social responsibility, and environmental
            conservation. This significant milestone is a testament to Ennys Group’s commitment to sustainability,
            transparency, and the well-being of its farmers and the environment.
          </p>
        </div>
        <div className="image-section">
          <img src={cocoaImage} alt="Rainforest Certified Cocoa" />
        </div>
      </div>
    </section>
  );
};

export default RainforestCertification;
