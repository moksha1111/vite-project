import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className="container">
        <div className="content">
          <Link className="name" to="/" onClick={closeMenu}>
            <div className="logo">
              <h2>F</h2>
              <h2>FoodFleet</h2>
            </div>
          </Link>

          {/* Desktop Navigation (visible on larger screens) */}
          <nav className="links desktop-nav">
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
            <Link to="/howitworks" onClick={closeMenu}>
              HowItWorks
            </Link>
            <Link to="/services" onClick={closeMenu}>
              Services
            </Link>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </nav>

          {/* Desktop Auth (visible on larger screens) */}
          <nav className="auth desktop-auth">
            <Link to={"/signin"} className="signin" onClick={closeMenu}>
              Sign In
            </Link>
            <Link to={"/ordernow"} className="ordernow" onClick={closeMenu}>
              Order Now
            </Link>
          </nav>

          {/* Mobile Menu Button (visible only on mobile) */}
          <button
            className={`hamburger ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
          <nav className="mobile-links">
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
            <Link to="/howitworks" onClick={closeMenu}>
              HowItWorks
            </Link>
            <Link to="/services" onClick={closeMenu}>
              Services
            </Link>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </nav>

          <div className="mobile-auth">
            <Link to={"/signin"} className="signin" onClick={closeMenu}>
              Sign In
            </Link>
            <Link to={"/ordernow"} className="ordernow" onClick={closeMenu}>
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
