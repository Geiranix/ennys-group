import React from "react";
import "../assets/styles/miniServices.css";
import { FaExchangeAlt, FaWarehouse, FaTruckMoving } from "react-icons/fa";
import { Link } from "react-router-dom";

import exportBg from "../assets/images/home-cocoa.jpg";
import warehouseBg from "../assets/images/home-cocoa.jpg";
import haulageBg from "../assets/images/home-cocoa.jpg";

const services = [
  {
    title: "Export",
    description:
      "We export agricultural commodities, especially cocoa beans and cashew around the world to markets including Europe, Asia, and the United States.",
    Icon: FaExchangeAlt,
    bg: exportBg,
  },
  {
    title: "Warehousing",
    description:
      "We operate standard warehouses which allow transport optimization along the supply chain.",
    Icon: FaWarehouse,
    bg: warehouseBg,
  },
  {
    title: "Haulage",
    description:
      "We provide efficient and effective haulage services across the country and we have set a very high standard of service in the industry.",
    Icon: FaTruckMoving,
    bg: haulageBg,
  },
];

const MiniServices = () => {
  return (
    <section className="services-section">
      <h2>
        We provide the <span className="highlight">best services.</span>
      </h2>
      <div className="services-grid">
        {services.map(({ title, description, Icon, bg }, index) => (
          <div
            className="service-card"
            key={index}
            style={{ "--bg": `url(${bg})` }}
          >
            <div className="icon-wrapper">
              <Icon className="default-icon" />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
      <div className="view-all">
        <Link to="/services">→ View All Services</Link>
      </div>
    </section>
  );
};

export default MiniServices;
