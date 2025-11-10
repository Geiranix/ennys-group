import React from "react";
import "../assets/styles/aboutSection.css";
import { Users, Award, Globe, Leaf } from "lucide-react";
import company from "../assets/images/sustainable-farming-practices.jpg"

export default function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        
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

        <div className="about-grid">
          
          <div className="about-content">
            <div className="about-section">
              <h3>Our Heritage</h3>
              <p>
                Founded by Hon. Eniolorunda Omosule, a respected Nigerian lawmaker and lifelong 
                agricultural advocate, our company was built on a legacy of resilience, trust, 
                and service to farming communities.
              </p>
              <p>
                Ennys was  created to be the export arm of Mike Model Investments and the legacy continues under the leadership of his son Michael Olukayode 
                Eniomosule, a seasoned global network engineer with international experience 
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
                  {/* <div className="feature-subtitle">Rainforest Alliance</div> */}
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

         
          <div className="about-image">
            <div className="about-image-container">
              <img src={company}
                alt="African farmers working sustainably"
              />
            </div>
          </div>
        </div>

       
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
