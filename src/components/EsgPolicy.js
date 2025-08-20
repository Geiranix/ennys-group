import React from 'react';
import '../assets/styles/sustainabilityPolicy.css'; // Common styling for all policies

const ESGPolicy = () => {
  return (
    <section className="policy-page">
      <div className="policy-header">
        <h2>ESG Policy</h2>
        <p>
          Sunbeth Global Concepts Limited is committed to the highest Environmental, Social, and Governance standards...
        </p>
      </div>

      <div className="policy-section">
        <h3>1. Introduction</h3>
        <p>
          Sunbeth was established in 2017 as a trading company for cocoa and cashew, exporting over 150,000 metric tonnes.
        </p>
      </div>

      <div className="policy-section">
        <h3>1.2 Sustainable Sourcing</h3>
        <p>
          We drive sustainable sourcing practices across our cocoa supply chain, focusing on biodiversity and deforestation-free cocoa.
        </p>
      </div>

      <div className="policy-section">
        <h3>1.3 Climate Action</h3>
        <p>
          We reduce our carbon footprint by implementing energy-efficient practices and renewable energy investments.
        </p>
      </div>

      <div className="policy-section">
        <h3>1.4 Waste Management</h3>
        <p>
          We promote recycling, composting, and digital operations to cut down waste and go paperless.
        </p>
      </div>

      <div className="policy-section">
        <h3>2. Social Responsibility</h3>
        <p>
          Our social responsibility centers around empowering communities and fostering inclusion.
        </p>
      </div>
    </section>
  );
};

export default ESGPolicy;
