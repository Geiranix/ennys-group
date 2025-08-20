import React from "react";
import "../assets/styles/footer.css";
import {Link} from "react-router-dom"
import {
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../assets/images/logo.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Branding */}
        <div className="footer-column footer-brand">
            <div className="logo"><img src={logo} alt="ennys group global logo"></img>
             <h2>Ennys Group</h2>
            </div>
         
          <p>
            Ennys Group is a reputable organisation that specializes
            in the export of premium quality raw cocoa beans and cashew from Nigeria.
          </p>
         
        </div>

       
        <div className="footer-column footer-links">
          <h3>Navigation</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/company/ourculture">Our Culture</Link></li>
            <li><Link to="/company/management">Our Team</Link></li>
            <li><Link to="/sustainability/esgpolicy">Sustainability</Link></li>
            <li><Link to="/services">Services</Link></li>
          </ul>
        </div>

        
        <div className="footer-column footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#news">News & Events</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#legal">Legal & Privacy</a></li>
          </ul>
        </div>

        
        <div className="footer-column footer-contact">
          <h3>Contact</h3>
          <ul>
            <li>
              <FaPhoneAlt className="footer-icon" />
              <div>
                +2348039423759<br />+2348149389751
              </div>
            </li>
            <li>
              <FaMapMarkerAlt className="footer-icon" />
              <div>
                <strong>Corporate Office:</strong><br />
                First Floor, Off Catholic Church<br />
                Egbeta, Edo State, Nigeria.
              </div>
            </li>
           
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
