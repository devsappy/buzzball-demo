import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1 className="hero-title">READY TO<br/>HAVE A<br/>BALL?</h1>
        <p className="hero-subtitle">Our cocktails are the life of the party and perfect way to have a ball with your friends.</p>
        <button className="btn-find">FIND BUZZBALLZ</button>
      </div>
      <div className="hero-right">
        <img src="/hero.png" alt="Two women having fun with BuzzBallz" className="hero-img" />
      </div>
    </section>
  );
}

export default Hero;
