import React from 'react';
import '../assets/styles/sustainabilityPolicy.css';


const RainforestPolicy = () => {
  return (
    <section className="policy-page">
      <header className="policy-header">
        <div className="policy-hero">
          <div className="policy-hero-text">
            <h2>Rainforest Alliance Commitment</h2>
            <p>
              Ennys Group is actively working with certifying bodies in other to be in compliance with Rainforest Alliance to strengthen ecosystem
              resilience, improve farmer livelihoods, and promote ethical sourcing.
            </p>
          </div>

          {/* Image block (shared styles) */}
          {/* <figure className="policy-media">
            <img
              src={rainforest}
              alt="Rainforest Alliance Certified seal"
              loading="lazy"
            />
            <figcaption>Rainforest Alliance Certified™</figcaption>
          </figure> */}
        </div>
      </header>

      <div className="policy-section">
        <h3>1. Certified Farming Practices</h3>
        <p>
          We work closely with Rainforest-certified cooperatives to ensure best practices in
          biodiversity, agroforestry, and water conservation.
        </p>
      </div>

      <div className="policy-section">
        <h3>2. Farmer Training &amp; Incentives</h3>
        <p>
          Through our partnership, Ennys delivers training programs that enhance productivity and
          incentivize long-term compliance with sustainable farming models.
        </p>
      </div>

      <div className="policy-section">
        <h3>3. Continuous Improvement</h3>
        <p>
          We support monitoring and verification systems that evolve with climate and regulatory
          needs. Our commitment ensures a just and green supply chain.
        </p>
      </div>
    </section>
  );
};

export default RainforestPolicy;
