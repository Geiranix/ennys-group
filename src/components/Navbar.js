import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
      {/* Logo clickable back to Home */}
      <NavLink to="/" className="logo" onClick={closeMenu}>
        Ennys 
      </NavLink>

      {/* Mobile menu icon */}
      <div
        className="menu-icon"
        onClick={toggleMenu}
        role="button"
        tabIndex={0}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        onKeyDown={(e) =>
          (e.key === "Enter" || e.key === " ") && toggleMenu()
        }
      >
        {menuOpen ? "✕" : "☰"}
      </div>

      {/* Nav links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active-link" : "")
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>
        </li>

        {/* Company dropdown */}
        <li className="nav-item dropdown">
          <button
            className={
              "dropdown-toggle" + (dropdown.company ? " active-link" : "")
            }
            onClick={() => toggleDropdown("company")}
          >
            Company ▾
          </button>
          {dropdown.company && (
            <ul className="dropdown-menu">
              <li>
                <NavLink to="/about" onClick={closeMenu}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/company/ourculture" onClick={closeMenu}>
                  Our Culture
                </NavLink>
              </li>
              <li>
                <NavLink to="/company/management" onClick={closeMenu}>
                  Management
                </NavLink>
              </li>
            </ul>
          )}
        </li>

        <li className="nav-item">
          <NavLink
            to="/services"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active-link" : "")
            }
            onClick={closeMenu}
          >
            Services
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/products"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active-link" : "")
            }
            onClick={closeMenu}
          >
            Products
          </NavLink>
        </li>

        {/* Sustainability dropdown */}
        <li className="nav-item dropdown">
          <button
            className={
              "dropdown-toggle" + (dropdown.sustainability ? " active-link" : "")
            }
            onClick={() => toggleDropdown("sustainability")}
          >
            Sustainability ▾
          </button>
          {dropdown.sustainability && (
            <ul className="dropdown-menu">
              <li>
                <NavLink to="/sustainability/eudrpolicy" onClick={closeMenu}>
                  EUDR Policy
                </NavLink>
              </li>
              <li>
                <NavLink to="/sustainability/rainforestpolicy" onClick={closeMenu}>
                  Rainforest Policy
                </NavLink>
              </li>
            </ul>
          )}
        </li>

        <li className="nav-item">
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active-link" : "")
            }
            onClick={closeMenu}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
