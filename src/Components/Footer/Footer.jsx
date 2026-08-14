import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      {/* Top Row: Brand & Newsletter */}
      <div className="footer-top">
        {/* Left Column: Brand & Bio */}
        <div className="footer-brand">
          <h2>
            Khursheed Alam<span className="logo-dot">.</span>
          </h2>
          <p>
            CS (AI) Engineer & Multi-Disciplinary Developer operating across Machine Learning, Data Analytics, Robotics, and Full-Stack Web Development.
          </p>
        </div>

        {/* Right Column: Newsletter Subscription */}
        <div className="footer-subscribe">
          <form onSubmit={handleSubscribe} className="subscribe-box">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="subscribe-btn">
              {subscribed ? "Subscribed! ✨" : "Subscribe"}
            </button>
          </form>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* Bottom Row: Copyright & Legal */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          © {new Date().getFullYear()} Khursheed Alam. All rights reserved. Built with React & 3D Glass UI.
        </p>

        <div className="footer-links">
          <AnchorLink href="#home" className="footer-link">
            Term of Services
          </AnchorLink>
          <AnchorLink href="#home" className="footer-link">
            Privacy Policy
          </AnchorLink>
          <AnchorLink href="#contact" className="footer-link">
            Connect With Me
          </AnchorLink>
        </div>

        {/* Scroll To Top Floating Button */}
        <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
