import { Mail, Phone, MapPin} from "lucide-react";
import { Link } from "react-router-dom";
import "../assets/styles/footer.css";

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
       
        <div className="footer-main">
          <div className="footer-grid">
           
            <div className="footer-section">
              <div className="footer-logo">
                
                <h3>Ennys </h3>
              </div>
              <p className="footer-description">
                Connecting Nigeria's finest agricultural products to global markets through 
                sustainable and ethical practices for over 30 years.
              </p>
             
            </div>

            
            <div className="footer-section">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/company/ourculture">Our Culture</Link></li>
                <li><Link to="/company/management">Our Team</Link></li>
                <li><Link to="/sustainability/esgpolicy">Sustainability</Link></li>
                <li><Link to="/services">Services</Link></li>
              </ul>
            </div>

          
            <div className="footer-section">
              <h4 className="footer-title">Our Products</h4>
              <ul className="footer-list">
                <li>Raw Cashew Nuts</li>
                <li>Cocoa Beans</li>
                <li>Sustainable Sourcing</li>
                <li>Quality Assurance</li>
              </ul>
            </div>

            
            <div className="footer-section">
              <h4 className="footer-title">Get In Touch</h4>
              <div className="footer-contact">
                <div className="contact-item">
                  <MapPin />
                  <span>Corporate Office: Georgian Drive, Barrie,Ontario,Canada</span>
                  <span>Off Catholic Church Egbeta Edo State, Nigeria</span>
                </div>
                <div className="contact-item">
                  <Phone />
                  <span>+12492882325</span>
                </div>
                <div className="contact-item">
                  <Mail />
                  <span>michaeleniomosule@ennysgroup.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

       

        <hr className="footer-separator" />

        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              © {new Date().getFullYear()} Ennys Group. All rights reserved.
            </div>
           
          </div>
        </div>
      </div>
    </footer>
  );
}