import React from "react";
import "../assets/styles/companyValues.css";
import { FaShieldAlt, FaCheckSquare, FaRocket, FaCog } from "react-icons/fa";

const values = [
  {
    icon: <FaCheckSquare />,
    title: "Integrity",
    description:
      "We maintain our integrity by being transparent in delivering our promise of value.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Service",
    description:
      "We are service-minded and pay attention to providing impactful experiences to our shareholders, employees, and customers.",
  },
  {
    icon: <FaRocket />,
    title: "Ambition",
    description:
      "We want to do more, with a vibrant team. We care about our people and treat each other with utmost respect.",
  },
  {
    icon: <FaCog />,
    title: "Mutual Respect and Teamwork",
    description:
      "We foster an environment of mutual respect and teamwork, valuing each member's contributions and encouraging collaboration to achieve our goals.",
  },
];

const CompanyValues = () => {
  return (
    <section className="values-section">
      <div className="values-header">
        <span className="section-subtitle">What we stand for</span>
        <h2>Our Company Values</h2>
      </div>
      <div className="values-grid">
        {values.map((item, index) => (
          <div className="value-card" key={index}>
            <div className="value-icon">{item.icon}</div>
            <div className="value-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyValues;
