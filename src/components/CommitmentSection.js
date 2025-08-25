import { Leaf, Shield, Users, Eye } from "lucide-react";
import "../assets/styles/commitmentSection.css";

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
        {/* Header */}
        <div className="commitment-header">
          <div className="badge">
            🌱 Our Rainforest Alliance Commitment
          </div>
          <h2 className="commitment-title">
            Sustainability is Not Just a Goal – It's Our Responsibility
          </h2>
          <p className="commitment-subtitle">
            We are proud to be Rainforest Alliance Certified in cocoa, a recognition of our 
            dedication to ethical and environmentally responsible practices.
          </p>
        </div>

        {/* Main Content */}
        <div className="commitment-main">
          {/* Image */}
          <div className="commitment-image">
            <div className="commitment-image-container">
              <img
                src="https://images.unsplash.com/photo-1623944156984-130d29e4f9ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBleHBvcnQlMjBzaGlwcGluZ3xlbnwxfHx8fDE3NTYwNzM4MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Sustainable agricultural practices"
              />
            </div>
            
            {/* Certification Badge */}
            <div className="certification-badge">
              <div className="cert-icon-container">
                <Leaf />
              </div>
              <div className="cert-title">Rainforest Alliance</div>
              <div className="cert-subtitle">Certified</div>
            </div>
          </div>

          {/* Content */}
          <div className="commitment-content">
            <div className="commitment-section">
              <h3>The Rainforest Alliance Seal</h3>
              <p>
                The Rainforest Alliance seal is more than a symbol; it reflects our pledge to 
                responsible sourcing and sustainable practices that benefit both people and the planet.
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

        {/* Bottom Grid */}
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

        {/* Mission Statement */}
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