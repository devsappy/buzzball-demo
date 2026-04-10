import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="#" className="nav-link">BUZZ CLUB</a>
        <div className="nav-dropdown">
          <a href="#" className="nav-link">SHOP <span className="chevron"></span></a>
        </div>
        <div className="nav-dropdown">
          <a href="#" className="nav-link">OUR PRODUCTS <span className="chevron"></span></a>
        </div>
      </div>
      
      <div className="nav-center">
        <h1 className="logo">BuzzBallz<span className="logo-r">®</span></h1>
      </div>
      
      <div className="nav-right">
        <button className="btn-where-to-buy">WHERE TO BUY</button>
        <div className="nav-dropdown lang-dropdown">
          <span className="nav-link">EN <span className="chevron"></span></span>
        </div>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
