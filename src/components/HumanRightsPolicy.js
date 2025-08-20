import React from 'react';
import '../assets/styles/sustainabilityPolicy.css';

const HumanRightsPolicy = () => {
  return (
    <section className="policy-page">
      <div className="policy-header">
        <h2>Human Rights Policy</h2>
        <p>
          At Ennys Group, we uphold human dignity, equity, and justice as non-negotiable foundations of our operations across all value chains.
        </p>
      </div>

      <div className="policy-section">
        <h3>1. No Child or Forced Labor</h3>
        <p>
          Ennys Group enforces strict policies prohibiting child labor, forced labor, and any form of modern slavery. All stakeholders must comply with our ethical sourcing standards.
        </p>
      </div>

      <div className="policy-section">
        <h3>2. Safe & Equitable Workplaces</h3>
        <p>
          We foster a safe, inclusive, and respectful environment for all workers, regardless of gender, ethnicity, religion, or background.
        </p>
      </div>

      <div className="policy-section">
        <h3>3. Grievance & Remedy Mechanisms</h3>
        <p>
          Workers and partners have access to confidential grievance channels. We investigate all complaints fairly and ensure prompt redressal where needed.
        </p>
      </div>
    </section>
  );
};

export default HumanRightsPolicy;
