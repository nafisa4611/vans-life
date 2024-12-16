import React from 'react';
import { Link } from 'react-router-dom';
import aboutImg from '../../assets/about-hero.png';
import './About.css';

export default function About() {
  return (
    <div className="about-container">
      <img src={aboutImg} alt="About Van" className="about-image" />
      <div className="about-content">
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van rental. 
          Our vans are recertified before each trip to ensure your travel plans can go 
          off without a hitch.Our vans are recertified before each trip to ensure your travel plans can go 
          off without a hitch. Our vans are recertified before each trip to ensure your travel plans can go 
          off without a hitch. (Hitch costs extra 😉)
        </p>
        <div className="cta-container">
          <h2>Your destination is waiting. Your van is ready.</h2>
          <Link to="/vans" className="about-btn">Explore our vans</Link>
        </div>
      </div>
      
    </div>
    
  );
}

