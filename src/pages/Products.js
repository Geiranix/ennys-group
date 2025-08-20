import React from 'react';
import '../assets/styles/products.css';
import cocoaBeans from "../assets/images/raw-cocoa-beans.jpg"
import cashewNuts from "../assets/images/cashew-nuts.jpg"
import cocoaButter from "../assets/images/cocoa-butter.jpg"
import processedLiquor from "../assets/images/processed-liquor.jpg"
const products = [
  {
    id: 1,
    name: 'Raw Cocoa Beans',
    description: 'Premium quality raw cocoa beans, sourced directly from Nigerian farms.',
    image: cocoaBeans,
  },
  {
    id: 2,
    name: 'Cashew Nuts',
    description: 'High-grade cashew nuts, carefully processed and packed for export.',
    image: cashewNuts,
  },
  {
    id: 3,
    name: 'Processed Cocoa Liquor',
    description: 'Refined cocoa liquor, ideal for chocolate manufacturers worldwide.',
    image: processedLiquor,
  },
  {
    id: 4,
    name: 'Cocoa Butter',
    description: 'Pure cocoa butter extracted to the highest standards for cosmetic and food industries.',
    image: cocoaButter,
  },
];

const Products = () => {
  return (
    <section className="products" id="products">
       
      <h2>Our Products</h2>
      <div className="products-grid">
        {products.map(({ id, name, description, image }) => (
          <div key={id} className="product-card">
            <img src={image} alt={name} className="product-image" />
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
