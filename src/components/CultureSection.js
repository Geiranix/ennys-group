
import { Heart, Users, Leaf, Shield, Globe, Award, Handshake, Target } from 'lucide-react';
import "../assets/styles/cultureSection.css";
import peopleImage1 from "../assets/images/farm-audit-inspection.jpg"
import peopleImage2 from "../assets/images/warehouse-nigeria.jpg"

export default function CultureSection() {
  return (
    <section className="culture">
      
      <div className="culture-hero">
        <div className="culture-hero-container">
          <div className="culture-hero-content">
            <div className="badge">Our Culture</div>
            <h1 className="culture-hero-title">
              Where Passion Meets Purpose
            </h1>
            <p className="culture-hero-description">
              At Ennys Group, our culture is deeply rooted in the rich heritage of cocoa cultivation 
              and the unwavering commitment to excellence that has defined our journey for generations.
            </p>
          </div>
        </div>
      </div>

      
      <div className="culture-section">
        <div className="culture-container">
          <div className="culture-grid">
            <div className="culture-content">
              <h2 className="culture-title">Rich Heritage & Excellence</h2>
              <p className="culture-description">
                We believe that exceptional chocolate begins with exceptional people, and our team 
                embodies the passionate dedication that transforms humble cocoa beans into extraordinary 
                experiences. Our heritage spans generations, carrying forward the wisdom of traditional 
                cultivation while embracing modern innovation.
              </p>
              <div className="culture-features">
                <div className="culture-feature">
                  <div className="culture-feature-icon green">
                    <Heart />
                  </div>
                  <div className="culture-feature-text">
                    <h4>Passionate Dedication</h4>
                    <p>Every team member brings unwavering commitment to transforming cocoa beans into extraordinary experiences</p>
                  </div>
                </div>
                <div className="culture-feature">
                  <div className="culture-feature-icon blue">
                    <Award />
                  </div>
                  <div className="culture-feature-text">
                    <h4>Generational Excellence</h4>
                    <p>Our standards of excellence have been refined and perfected across multiple generations</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="culture-image">
              <div className="culture-image-container">
                <img
                  src={peopleImage2}
                  alt="Heritage and tradition in cocoa cultivation"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

     
      <div className="culture-section collaboration-section">
        <div className="culture-container">
          <div className="culture-grid reverse">
            <div className="culture-image">
              <div className="culture-image-container">
                <img
                  src={peopleImage1}
                  alt="Team collaboration and partnership"
                />
              </div>
            </div>
            <div className="culture-content">
              <h2 className="culture-title">Celebrating Collaboration</h2>
              <p className="culture-description">
                Our culture celebrates collaboration, where farmers, processors, chocolatiers, and 
                innovators work hand in hand, sharing knowledge and expertise that spans continents 
                and cultures. We foster an environment of continuous learning and sustainable growth.
              </p>
              <div className="collaboration-stats">
                <div className="stat-item">
                  <div className="stat-icon">
                    <Users />
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">500+</div>
                    <div className="stat-label">Partner Farmers</div>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">
                    <Globe />
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">15+</div>
                    <div className="stat-label">Countries</div>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">
                    <Target />
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">30+</div>
                    <div className="stat-label">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      <div className="values-section">
        <div className="culture-container">
          <div className="values-header">
            <h2 className="values-title">Our Core Values</h2>
            <p className="values-subtitle">
              The principles that guide every decision and drive our commitment to excellence
            </p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon green">
                <Leaf />
              </div>
              <h3>Sustainability</h3>
              <p>
                We recognize that our responsibility extends far beyond profit margins to encompass 
                environmental stewardship and the preservation of traditional techniques alongside 
                cutting-edge innovation.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon blue">
                <Shield />
              </div>
              <h3>Integrity</h3>
              <p>
                Integrity flows through every aspect of our operations, from fair trade partnerships 
                with growers to transparent communication with consumers who trust our products.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon amber">
                <Globe />
              </div>
              <h3>Diversity</h3>
              <p>
                We embrace diversity as our strength, drawing inspiration from the global tapestry 
                of cocoa origins and the unique perspectives each team member brings to our mission.
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="impact-section">
        <div className="culture-container">
          <div className="impact-content">
            <div className="impact-header">
              <h2 className="impact-title">Community Impact</h2>
              <p className="impact-subtitle">
                Our commitment to wellbeing extends to every cocoa farming community we work with
              </p>
            </div>
            <div className="impact-grid">
              <div className="impact-card">
                <div className="impact-card-content">
                  <div className="impact-icon">
                    <Handshake />
                  </div>
                  <h4>Fair Trade Partnerships</h4>
                  <p>Building long-term relationships that ensure fair compensation and sustainable livelihoods for farming communities</p>
                </div>
              </div>
              <div className="impact-card">
                <div className="impact-card-content">
                  <div className="impact-icon">
                    <Users />
                  </div>
                  <h4>Community Development</h4>
                  <p>Investing in education, healthcare, and infrastructure to strengthen the communities that grow our cocoa</p>
                </div>
              </div>
              <div className="impact-card">
                <div className="impact-card-content">
                  <div className="impact-icon">
                    <Leaf />
                  </div>
                  <h4>Environmental Protection</h4>
                  <p>Promoting sustainable farming practices that protect biodiversity and combat climate change</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </section>
  );
}