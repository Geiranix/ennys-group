import React from "react";
import "../assets/styles/productsSection.css";
import CocoaIcon from "../assets/images/product-section-cocoa-icon.png"

const ProductsSection = () => {
  return (
    <section className="products-section">
      <div className="product-card">
        <div className="icon-wrapper">
          <img src={CocoaIcon} alt="This is a cocoa icon"/>
        </div>
        <h3>COCOA</h3>
        <p>
          Cocoa is a tropical evergreen tree that produces cocoa beans, which are used
          to make chocolate. SGC sources its beans directly from farmers in the region,
          who produce some of the finest cocoa in the country. SGC is dedicated to
          providing farmers with necessary resources and training to increase yield
          and quality of the beans.
        </p>
      </div>

      <div className="product-card">
        <div className="icon-wrapper">
           <img src={CocoaIcon} alt="This is a cocoa icon"/>
        </div>
        <h3>CASHEW</h3>
        <p>
          Sunbeth Global Concepts (SGC) is a leading exporter of premium quality cashew
          nuts, sourcing from over 19 states across Nigeria, each renowned for producing
          exceptional cashews. Committed to sustainable practices, SGC actively empowers
          farmers with the resources and knowledge they need to optimize their cashew
          harvests, fostering a thriving and resilient cashew industry.
        </p>
      </div>
    </section>
  );
};

export default ProductsSection;
