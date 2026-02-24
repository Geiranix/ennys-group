import { Leaf, Shield, Users, Eye } from "lucide-react";
import "../assets/styles/commitmentSection.css";
import RainforestCertification from "../assets/images/rainforest.png";

export default function CommitmentSection() {
  const commitments = [
    {
      icon: Leaf,
      title: "Protect Forests & Biodiversity",
      description: "Ensuring our sourcing does not contribute to deforestation or the loss of natural habitats.",
      color: "green"
    },
    {
      icon: Users,
      title: "Empower Farmers & Communities", 
      description: "Supporting fair wages, safe working conditions, and opportunities for farming families to thrive.",
      color: "blue"
    },
    {
      icon: Shield,
      title: "Promote Climate-Smart Agriculture",
      description: "Training farmers in sustainable methods that build resilience against climate change while improving crop quality.",
      color: "purple"
    },
    {
      icon: Eye,
      title: "Ensure Transparency & Traceability",
      description: "Guaranteeing that our supply chain meets international standards of accountability and integrity.",
      color: "orange"
    }
  ];

  return (
    <section id="commitment" className="commitment">
      <div className="commitment-container">
        
        <div className="commitment-header">
          <div className="badge">
            🌱 Our Rainforest Alliance Commitment
          </div>
          <h2 className="commitment-title">
            Sustainability is Not Just a Goal – It's Our Responsibility
          </h2>
          <p className="commitment-subtitle">
            Ennys Group Inc is  officially Rainforest Alliance Certified in Cocoa.
          </p>
        </div>

        
        <div className="commitment-main">
          
          <div className="commitment-image">
            <div className="commitment-image-container">
              <img
                src={RainforestCertification}
                alt="RainforestCertification "
              />
            </div>
            
           
            <div className="certification-badge">
              <div className="cert-icon-container">
                <Leaf />
              </div>
              <div className="cert-title">Rainforest Alliance</div>
              <div className="cert-subtitle">Certified</div>
            </div>
          </div>

          
          <div className="commitment-content">
            <div className="commitment-section">
              <h3>The Rainforest Alliance Seal</h3>
              <p>
                This certification reflects our commitment to responsible sourcing, environmental stewardship, human rights protection, and full supply chain traceability. It reinforces our dedication to operating a transparent, ethical, and sustainability driven cocoa trading platform that meets international standards.
We remain committed to continuous improvement and to supporting a more sustainable future for cocoa producing communities and global buyers alike

              </p>
            </div>

            <div className="commitment-features">
              {commitments.slice(0, 2).map((commitment, index) => {
                const IconComponent = commitment.icon;
                return (
                  <div key={index} className="commitment-feature">
                    <div className={`commitment-feature-icon ${commitment.color}`}>
                      <IconComponent />
                    </div>
                    <div className="commitment-feature-text">
                      <h4>{commitment.title}</h4>
                      <p>{commitment.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        
        <div className="commitment-bottom">
          {commitments.slice(2).map((commitment, index) => {
            const IconComponent = commitment.icon;
            return (
              <div key={index} className="commitment-card">
                <div className="commitment-card-content">
                  <div className={`commitment-card-icon ${commitment.color}`}>
                    <IconComponent />
                  </div>
                  <div className="commitment-card-text">
                    <h4>{commitment.title}</h4>
                    <p>{commitment.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        
        <div className="mission-statement">
          <p>
            "By aligning with the Rainforest Alliance, Ennys Trading Company strengthens its mission 
            to connect Nigeria's agricultural excellence with global markets responsibly, sustainably, 
            and with respect for people and the planet."
          </p>
        </div>
      </div>
    </section>
  );
}