import React from 'react';
import './Lifestyle.css';

const Lifestyle = () => {
  return (
    <section className="lifestyle">
      <div className="lifestyle-left">
        <p className="lifestyle-label">LIFESTYLE</p>
        <h2 className="lifestyle-title">5 TAILGATING TIPS AS GOOD AS A TOUCHDOWN</h2>
        <button className="btn-read-more">READ MORE</button>
      </div>
      <div className="lifestyle-right">
        <img src="/hero.png" alt="Tailgating with BuzzBallz" className="lifestyle-img" />
      </div>
    </section>
  );
}

export default Lifestyle;
