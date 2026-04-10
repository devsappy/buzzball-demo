import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h1 className="footer-logo">BuzzBallz<span className="logo-r">®</span></h1>
          <p className="footer-contact">
            Phone: 866-729-3722<br/>
            Email: info@buzzballz.com
          </p>
          <div className="social-links">
            <span className="social-icon">IG</span>
            <span className="social-icon">FB</span>
            <span className="social-icon">X</span>
          </div>
        </div>
        <div className="footer-column">
          <a href="#">Our Products</a>
          <a href="#">Shop Merch</a>
          <a href="#">About Us</a>
          <a href="#">Events</a>
        </div>
        <div className="footer-column">
          <a href="#">Find BuzzBallz</a>
          <a href="#">Distributors</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="footer-column">
          <h4>Sign up for the latest news from BuzzBallz</h4>
          <div className="newsletter">
            <input type="email" placeholder="Email Address" />
            <button>&rarr;</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Proud supporter of Responsibility.org</p>
        <div className="footer-legal">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Human Rights Policy</a>
          <a href="#">Accessibility</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
