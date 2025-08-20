import React, { useState } from 'react';
import '../assets/styles/sustainability.css';

const items = [
  {
    id: 1,
    title: 'Environmental, Social, and Governance (ESG)',
    content: `Sunbeth is dedicated to strong ESG principles that promote environmental protection, social responsibility, and transparent governance practices throughout our supply chain.`,
  },
  {
    id: 2,
    title: 'European Union Deforestation Regulation (EUDR)',
    content: `We comply fully with the EUDR, ensuring that all our cocoa and cashew exports are traceable and free from deforestation-linked risks.`,
  },
  {
    id: 3,
    title: 'Corporate Social Responsibility (CSR)',
    content: `Our CSR initiatives support local farming communities by investing in education, healthcare, and sustainable agriculture projects.`,
  },
  {
    id: 4,
    title: 'Rainforest Alliance Certification',
    content: `We maintain certification with the Rainforest Alliance, underscoring our commitment to responsible farming and environmental stewardship.`,
  },
];

const Sustainability = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleItem = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="sustainability" id="sustainability">
      <h2>Sustainability & Compliance</h2>
      <div className="accordion">
        {items.map(({ id, title, content }) => (
          <div
            key={id}
            className={`accordion-item ${activeId === id ? 'active' : ''}`}
          >
            <button className="accordion-title" onClick={() => toggleItem(id)}>
              {title}
              <span className="accordion-icon">{activeId === id ? '-' : '+'}</span>
            </button>
            <div className="accordion-content">
              <p>{content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sustainability;
