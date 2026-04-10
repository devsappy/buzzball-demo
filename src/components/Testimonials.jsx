import React from 'react';
import './Testimonials.css';

const testimonials = [
  "“By itself or mixed. The only flavor I actually look for at the convenience store. Great,great product. Congrats on your success with this...“",
  "“The buzz ball does exactly what the name says if gives you a buzz. Rita is the best flavor out them all to me. This buzz ball is a must...“",
  "“These are the perfect size to load into a cooler and bring with for some summer fun!! With so many different flavors and the fun shape you...“"
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="section-title-black">Words from Our Fans</h2>
      <div className="testimonial-slider">
        {testimonials.map((text, idx) => (
          <div className="testimonial-card" key={idx}>
            <p className="stars">⭐⭐⭐⭐⭐</p>
            <p className="testimonial-text">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
