import React,{useState} from "react"
import {Link} from "react-router-dom";
import "../assets/styles/navbar.css";

const Navbar = () => {  
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState({
    company: false,
    sustainability: false,
  });

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
 const toggleDropdown = (key) => {
    setDropdown((prev) => ({
      company: key === "company" ? !prev.company : false,
      sustainability: key === "sustainability" ? !prev.sustainability : false,
    }));
  };
  const closeMenu = () => {
    setMenuOpen(false);
    setDropdown({ company: false, sustainability: false });
  };

  return (
    <nav className="navbar">
      <div className="logo">Ennys Group</div>
       <div
        className="menu-icon"
        onClick={toggleMenu}
        role="button"
        tabIndex={0}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggleMenu()}
      >
        {menuOpen ? "✕" : "☰"}
      </div>
      
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>

        <li
          className="dropdown"
          onClick={() => toggleDropdown("company")}
        >
          <span>Company ▾</span>
          {dropdown.company && (
            <ul className="dropdown-menu">
              <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
              <li><Link to="/company/ourculture" onClick={closeMenu}>Our Culture</Link></li>
               <li><Link to="/company/management" onClick={closeMenu}>Management</Link></li>
            </ul>
          )}
        </li>

        <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
        <li><Link to="/products" onClick={closeMenu}>Products</Link></li>

        <li
          className="dropdown"
          onClick={() => toggleDropdown("sustainability")}
        >
          <span>Sustainability ▾</span>
          {dropdown.sustainability && (
            <ul className="dropdown-menu">
              <li><Link to="/sustainability/eudrpolicy" onClick={closeMenu}>EUDR Policy</Link></li>
              <li><Link to="/sustainability/humanrightspolicy" onClick={closeMenu}>HR Policy</Link></li>
              <li><Link to="/sustainability/esgpolicy" onClick={closeMenu}>ESG Policy</Link></li>
              <li><Link to="/sustainability/rainforestpolicy" onClick={closeMenu}>Rainforest Policy</Link></li>
            </ul>
          )}
        </li>

        <li><Link to="/contact" onClick={closeMenu}>Contact us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;