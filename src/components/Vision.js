import React, { useState } from "react";
import { FaEye, FaBullseye, FaFlag } from "react-icons/fa";
import "../assets/styles/vision.css";

const Vision = () => {
  const [activeTab, setActiveTab] = useState("purpose");

  const tabs = {
    purpose: {
      title: "Our Purpose",
      icon: <FaBullseye />,
      content: (
        <>
          <p>
            We are a company with a relentless focus on quality of products and
            service.
          </p>
          <p>
            We wish to deliver the highest possible perceived value to our
            partners in origin and at destination.
          </p>
          <p>
            We aim to conduct business professionally, with passion, impact, and
            integrity.
          </p>
        </>
      ),
    },
    vision: {
      title: "Our Vision",
      icon: <FaEye />,
      content: (
        <>
          <p>
            To become Africa's most trusted and innovative exporter of raw
            agricultural produce, creating lasting partnerships and empowering
            communities.
          </p>
        </>
      ),
    },
    strategy: {
      title: "Our Strategy",
      icon: <FaFlag />,
      content: (
        <>
          <p>
            We scale our operations by combining modern processing techniques,
            global certifications, and farmer-first relationships to deliver
            excellence at every step.
          </p>
        </>
      ),
    },
  };

  return (
    <section className="pvs-section">
      <div className="pvs-container">
        <div className="pvs-tabs">
          {Object.keys(tabs).map((key) => (
            <div
              key={key}
              className={`pvs-tab ${activeTab === key ? "active" : ""}`}
              onClick={() => setActiveTab(key)}
            >
              <div className="pvs-icon">{tabs[key].icon}</div>
              <div className="pvs-title">{tabs[key].title}</div>
            </div>
          ))}
        </div>
        <div className="pvs-content">{tabs[activeTab].content}</div>
      </div>
    </section>
  );
};

export default Vision;
