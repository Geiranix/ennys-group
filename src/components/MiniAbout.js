import React from "react";
import "../assets/styles/miniAbout.css";
import aboutImage from "../assets/images/eglogo-stacked-dark.png"; // Replace with actual path

const MiniAbout = () => {
  return (
    <section className="mini-about">
      <div className="mini-about-container">
        <div className="mini-about-image">
          <img src={aboutImage} alt="Ennys Group  logo" />
        </div>
        <div className="mini-about-content">
          <h4 className="mini-about-subtitle">
            <span className="orange-line"></span> About SGC
          </h4>
          <h2>
            Excellent Logistics and <br />
            <span className="highlight">Supply Chain Management</span>
          </h2>
          <p>
            Ennys Group is a leading trading company based in
            Nigeria that specializes in the exportation of high-quality cocoa
            beans and cashew. EG sources its products directly from farmers,
            ensuring that the cocoa beans and cashew nuts are of the highest
            quality, and are ethically and sustainably sourced.
          </p>
          <ul>
            <li>
              <span className="bullet"></span> Since 2017 Ennys Group has sourced
              and exported more than 150,000Mt. of cocoa beans and raw cashew
              nuts from Nigeria and has proven a reliable supplier of
              high-quality products to the markets.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MiniAbout;
