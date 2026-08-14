import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./NavBar.css";

const NavBar = ({ onOpenJarvis }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Dynamic Scroll Glassmorphism Trigger
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      {/* 3D Glowing Brand Logo */}
      <div className="nav-logo">
        <AnchorLink href="#home" className="logo-link">
          <h2>
            Khursheed Alam<span className="logo-dot">.</span>
          </h2>
        </AnchorLink>
      </div>

      {/* Hamburger Icon */}
      <div
        className={`nav-mob-toggle ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Glassmorphic Nav Menu */}
      <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
        <li>
          <AnchorLink
            className="anchor-link"
            href="#home"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#about"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#services"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#projects"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#datalab"
            onClick={() => setIsMenuOpen(false)}
          >
            Data Lab
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#vision"
            onClick={() => setIsMenuOpen(false)}
          >
            Vision
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </AnchorLink>
        </li>
      </ul>

      {/* CTA Connect Button */}
      <div className="nav-connect">
        <button className="anchor-link-btn" onClick={onOpenJarvis}>
          Let's Talk ✨
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
