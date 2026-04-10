import React from 'react';
import './Mission.css';

const Mission = () => {
  return (
    <section className="mission">
      <div className="mission-banner-top">
        <h2>TAKE BUZZBALLZ TO THE BEACH, HOUSE PARTY, PICNICS AND JUST ABOUT ANYWHERE ELSE YOU MIGHT FIND A GOOD TIME.</h2>
      </div>
      
      <div className="mission-content">
        <div className="mission-header-text">
          <p className="mission-subtitle">WE'RE ON</p>
          <h2 className="mission-title">A MISSION</h2>
        </div>
        
        <div className="mission-features">
          <div className="mission-feature">
            {/* SVG Icon Placeholder */}
            <svg viewBox="0 0 24 24" width="80" height="80" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
            <h3>Women Founded</h3>
            <p>BuzzBallz is a Women Founded Texas distillery, winery and brewery founded in 2009</p>
          </div>
          <div className="mission-feature">
            <svg viewBox="0 0 24 24" width="80" height="80" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              <path d="M2 12h20"></path>
            </svg>
            <h3>Au naturel</h3>
            <p>All pre-mixed cocktails are crafted with all natural flavors and premium ingredients</p>
          </div>
          <div className="mission-feature">
            <svg viewBox="0 0 24 24" width="80" height="80" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
              <line x1="9" y1="9" x2="9.01" y2="9"></line>
              <line x1="15" y1="9" x2="15.01" y2="9"></line>
            </svg>
            <h3>We love our planet</h3>
            <p>We are proud to work with international recycling leader TerraCycle®</p>
          </div>
        </div>
        
        <button className="btn-full-story">FULL STORY</button>
      </div>
    </section>
  );
}

export default Mission;
