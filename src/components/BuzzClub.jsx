import React from 'react';
import './BuzzClub.css';

const BuzzClub = () => {
  return (
    <section className="buzz-club">
      <div className="buzz-club-bg">
        <img src="/pool_party.png" alt="Buzz Club Pool Party" />
      </div>
      
      <div className="buzz-club-content">
        <div className="buzz-club-logo">
          <h1>BUZZ<br/><span className="est-text">EST®</span> <span className="big-c">C</span> <span className="est-text">2019</span><br/>CLUB</h1>
        </div>
        
        <div className="buzz-club-bottom">
          <div className="buzz-club-grid">
            <div className="club-feature">
              {/* Stack of Coins Icon Placeholder */}
              <svg viewBox="0 0 24 24" width="60" height="60" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
              </svg>
              <h3>EARN BUZZIES</h3>
              <p>When you complete activities, you will be awarded Buzzies points to your profile</p>
            </div>
            <div className="club-feature">
              {/* Cap Icon Placeholder */}
              <svg viewBox="0 0 24 24" width="60" height="60" stroke="white" strokeWidth="2" fill="white" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                <path d="M5 13V9a7 7 0 0 1 14 0v4"></path>
              </svg>
              <h3>REDEEM FOR SWAG</h3>
              <p>Use your well-earned Buzzies points to purchase BuzzBallz branded swag</p>
            </div>
            <div className="club-feature">
              {/* VIP Icon Placeholder */}
              <svg viewBox="0 0 24 24" width="60" height="60" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 15l-2 5l9-5"></path>
                <circle cx="12" cy="8" r="7"></circle>
                <text x="7" y="11" fill="white" stroke="none" fontSize="8" fontWeight="bold">VIP</text>
              </svg>
              <h3>EXCLUSIVE DISCUSSIONS</h3>
              <p>We ask Buzz Club members to weigh in on flavor innovation & other important topics</p>
            </div>
          </div>
          <button className="btn-signup-transparent">SIGN UP NOW</button>
        </div>
      </div>
    </section>
  );
}

export default BuzzClub;
