import React from 'react';
import '../assets/styles/sustainabilityPolicy.css';

const EudrPolicy = () => {
  return (
    <section className="policy-page">
      <div className="policy-header">
        <h2>EUDR Compliance Policy</h2>
        <p>
          Ennys Group is fully aligned with the European Union Deforestation Regulation (EUDR), ensuring all agricultural exports are deforestation-free and legally sourced.
        </p>
      </div>

      <div className="policy-section">
        <h3>1. Traceability & Due Diligence</h3>
        <p>
          Ennys Group integrates geolocation tools, supplier audits, and robust data collection systems to ensure traceability from farm to port. We maintain full compliance documentation for all our cocoa and cashew shipments.
        </p>
      </div>

      <div className="policy-section">
        <h3>2. Farmer Engagement</h3>
        <p>
          We educate our farming communities on land use and environmental stewardship. Our team conducts routine training and monitoring to ensure EUDR awareness at the grassroots level.
        </p>
      </div>

      <div className="policy-section">
        <h3>3. Verification & Reporting</h3>
        <p>
          We conduct internal and third-party assessments to ensure compliance with evolving EU mandates. All records are maintained transparently for audit purposes.
        </p>
      </div>
    </section>
  );
};

export default EudrPolicy;
