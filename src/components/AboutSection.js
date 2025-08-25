import React from "react";
import "../assets/styles/aboutSection.css";
import warehouse from "../assets/images/warehouse-nigeria.jpg"
import { Users, Award, Globe, Leaf } from "lucide-react";


export default function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* Header */}
        <div className="about-header">
          <div className="badge">
            About Ennys Trading Company
          </div>
          <h2 className="about-title">
            Rooted in Tradition, Growing for the Future
          </h2>
          <p className="about-subtitle">
            Ennys Trading Company is the export arm of Mike Model Investments, a proudly Nigerian 
            enterprise with over 30 years of expertise in the trading of cashew nuts and cocoa beans.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="about-grid">
          {/* Content */}
          <div className="about-content">
            <div className="about-section">
              <h3>Our Heritage</h3>
              <p>
                Founded by Hon. Eniolorunda Omosule, a respected Nigerian lawmaker and lifelong 
                agricultural advocate, our company was built on a legacy of resilience, trust, 
                and service to farming communities.
              </p>
              <p>
                Today, that legacy continues under the leadership of his son Michael Olukayode 
                Eniommosule, a seasoned global network engineer with international experience 
                in one of Canada's top telecommunications firms, bringing modern innovation 
                to a traditional industry.
              </p>
            </div>

            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon green">
                  <Award />
                </div>
                <div className="feature-text">
                  <div className="feature-title">Certified Excellence</div>
                  <div className="feature-subtitle">Rainforest Alliance</div>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon blue">
                  <Globe />
                </div>
                <div className="feature-text">
                  <div className="feature-title">Global Reach</div>
                  <div className="feature-subtitle">International Markets</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="about-image">
            <div className="about-image-container">
              <img
                src="https://images.unsplash.com/photo-1585094659595-04a44bcba305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZmFybWVycyUyMHN1c3RhaW5hYmxlfGVufDF8fHx8MTc1NjA3MzgyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="African farmers working sustainably"
              />
            </div>
          </div>
        </div>

        {/* Goals Grid */}
        <div className="goals-section">
          <div className="goals-header">
            <h3>Our Goals</h3>
            <p>
              Looking ahead, Ennys is committed to expanding our impact across multiple dimensions
            </p>
          </div>

          <div className="goals-grid">
            <div className="card">
              <div className="card-content">
                <div className="card-icon green">
                  <Leaf />
                </div>
                <h4>Expanding Commodity Exports</h4>
                <p>
                  Diversifying beyond cashews and cocoa to include other high-demand crops 
                  from Nigeria's fertile soil.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-content">
                <div className="card-icon blue">
                  <Users />
                </div>
                <h4>Deepening Farmer Impact</h4>
                <p>
                  Reaching more farming communities with tools, knowledge, and fair market access.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-content">
                <div className="card-icon amber">
                  <Globe />
                </div>
                <h4>Global Partnerships</h4>
                <p>
                  Building long-term relationships with buyers who share our values of quality, 
                  sustainability, and transparency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
