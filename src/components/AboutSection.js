import React from "react";
import "../assets/styles/aboutSection.css";
import warehouse from "../assets/images/warehouse-nigeria.jpg"


const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-text">
        <h2>About Us – Ennys</h2>
        <h3>Ennys is Nigeria’s trusted powerhouse for premium cocoa and cashew exports.</h3>
        <p>
          At Ennys, we are more than just exporters—we are stewards of quality,
          champions of sustainable sourcing, and proud partners to hundreds of local
          farmers across Nigeria. Since our inception, Ennys has stood at the
          intersection of tradition and innovation, building a legacy rooted in
          ethical trade and agricultural excellence.
        </p>
        <p>
          With deep roots in Nigeria’s agricultural heartland, Ennys sources,
          processes, and exports world-class cocoa beans and cashew nuts to global
          markets. Our commitment to transparency, traceability, and fair trade not
          only ensures the highest product standards but also uplifts the farming
          communities that power our success.
        </p>
        <p>
          We believe that global excellence starts with local impact. That’s why our
          operations span across Nigeria’s key producing states, where we work
          hand-in-hand with over 300 smallholder farmers—empowering them with the
          tools, training, and resources needed to thrive in today’s competitive
          markets.
        </p>
        <p>
          From bean to bag, every product we export tells a story of quality, care,
          and purpose.
        </p>
      </div>
      <div className="about-image">
        <img
          src={warehouse}
          alt="Ennys Cocoa Warehouse"
        />
      </div>
    </section>
  );
};

export default AboutSection;
