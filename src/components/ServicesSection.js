import React from "react";
import "../assets/styles/servicesSection.css";
import { Globe, Users, Shield, Truck, Leaf } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: "Commodity Export",
      description: "We specialize in the sourcing and export of premium Nigerian agricultural products",
      features: [
        "Raw Cashew Nuts – carefully selected, graded, and packaged to international standards",
        "Cocoa Beans –  committed to sustainabe sourcing"
      ],
      color: "green"
    },
    {
      icon: Users,
      title: "Farmer Partnerships", 
      description: "Direct collaboration with farming communities for mutual benefit",
      features: [
        "Fair pricing structures that benefit farmers directly",
        "Training programs on sustainable farming practices",
        "Direct farm-to-export partnerships for transparency"
      ],
      color: "blue"
    },
    {
      icon: Shield,
      title: "Quality Assurance & Traceability",
      description: "Rigorous quality control and transparent supply chain management",
      features: [
        "Products that meet global benchmarks and standards",
        "Full traceability systems for every shipment",
        "EUDR compliance and regulatory adherence"
      ],
      color: "purple"
    },
    {
      icon: Truck,
      title: "Logistics & Export Management",
      description: "Complete end-to-end export process management",
      features: [
        "Documentation and compliance handling",
        "Efficient shipping and port management",
        "On-time delivery guarantees"
      ],
      color: "orange"
    },
    {
      icon: Leaf,
      title: "Sustainability Consulting",
      description: "Expert guidance on climate-smart agricultural practices",
      features: [
        "Environmental impact assessments",
        "Climate-smart agriculture training"
      ],
      color: "emerald"
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        {/* Header */}
        <div className="services-header">
          <div className="badge">
            Our Services
          </div>
          <h2 className="services-title">
            Comprehensive Agricultural Export Solutions
          </h2>
          <p className="services-subtitle">
            At Ennys, we go beyond trading commodities – we provide reliable, transparent, 
            and sustainable solutions that connect farmers in Nigeria to global markets.
          </p>
        </div>

        
        <div className="services-grid">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="service-card">
                <div className="service-card-header">
                  <div className={`service-card-icon ${service.color}`}>
                    <IconComponent />
                  </div>
                  <h3 className="service-card-title">{service.title}</h3>
                </div>
                <div className="service-card-content">
                  <p className="service-card-description">{service.description}</p>
                  <ul className="service-feature-list">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="service-feature-item">
                        <span className="service-feature-bullet"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      
      </div>
    </section>
  );
}