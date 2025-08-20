import React from 'react';
import '../assets/styles/global.css';
import sus1 from"../assets/images/cocoa-quality-inspection.jpg"
import sus2 from"../assets/images/ethical-trade-practices.jpg"
import sus3 from"../assets/images/laboratory-testing.jpg"
import sus4 from"../assets/images/farm-audit-inspection.jpg"
import sus5 from"../assets/images/organic-certification.jpg"
import sus6 from"../assets/images/pesticide-monitoring.jpg"
import sus7 from"../assets/images/sustainable-farming-practices.jpg"
import sus8 from"../assets/images/worker-safety-ethics.jpg"



const imageUrls = [
  sus1,
  sus2,
  sus3,
  sus4,
  sus5,
  sus6,
  sus7,
  sus8,
  
];

const SustainabilitySection = () => {
  return (
    <section className="sustainability-section" id="sustainability">
      <div className="sustainability-left">
        <h4 className="subtitle">Sustainability</h4>
        <h2>
          We are committed to <span>best practices!</span>
        </h2>
        <p>
          In addition to checking the quality of the cocoa beans, SGC also conducts
          regular audits of its suppliers and farmers to ensure they are following
          ethical and sustainable practices. This includes checking for proper labor
          practices, use of pesticides, and other factors that can impact the quality
          of the cocoa beans.
        </p>
      </div>
      <div className="sustainability-gallery">
        {imageUrls.map((src, index) => (
          <img key={index} src={src} alt={`sustainability-${index}`} />
        ))}
      </div>
    </section>
  );
};

export default SustainabilitySection;
