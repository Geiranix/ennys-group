import React from "react";
import '../assets/styles/culture.css'
import {
  FaFan,
  FaChartLine,
  FaUniversity,
  FaRocket
} from "react-icons/fa";

const cultureData = [
  {
    title: "Respect",
    description:
      "We value and respect the different perspectives and backgrounds of our colleagues. We listen to ideas and opinions and create a safe space where everyone feels heard and valued. We treat everyone with kindness and empathy.",
    icon: <FaFan />,
    bgColor: "#000000", 
    color: "#ffffff",
  },
  {
    title: "Wellbeing & Growth",
    description:
      "We are committed to the well being and growth of ourselves, colleagues and customers. We actively support their development by providing guidance, resources. We always seek new opportunities for learning.",
    icon: <FaChartLine />,
    bgColor: "#28a745", // green
    color: "#ffffff",
  },
  {
    title: "Support",
    description:
      "We actively listen to the needs and concerns of our colleagues and offer a helping hand whenever necessary. Together we create an inclusive space where everyone feels comfortable seeking assistance and are empowered to reach their full potential.",
    icon: <FaUniversity />,
    bgColor: "#007bff", // blue
    color: "#ffffff",
  },
  {
    title: "High Performance",
    description:
      "We have an uncompromising attitude towards achieving excellence at work. We set ambitious goals and consistently strive to exceed them. We inspire and motivate our colleagues to excel, fostering a culture of excellence.",
    icon: <FaRocket />,
    bgColor: "#dc3545", // red
    color: "#ffffff",
  },
];

const Culture = () => {
  return (
    <section className="our-culture-section">
      <div className="culture-header">
        <p className="culture-subtitle">Our Culture</p>
        <h2 className="culture-title">
          At Ennys we live out the culture of
        </h2>
      </div>
      <div className="culture-grid">
        {cultureData.map((item, index) => (
          <div
            key={index}
            className="culture-card"
            style={{
              backgroundColor: item.bgColor,
              color: item.color,
            }}
          >
            <div className="culture-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Culture;
