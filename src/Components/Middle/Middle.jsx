import React, { useEffect } from 'react';
import './Middle.css';

const Middle = () => {
  // AOS is activated from the top of the code (Home Component)

  return (
    <div className='middle section'>
      <div className="secContainer container">
        <div className="grid">
          <span className="flex" data-aos='fade-up'>
            <h1>10</h1>
            <p>
              World Of Experiences
            </p>
          </span>
          <span className="flex" data-aos='fade-up'>
            <h1>2K+</h1>
            <p>
              Fine Destinations
            </p>
          </span>
          <span className="flex" data-aos='fade-up'>
            <h1>10K+</h1>
            <p>
              Customer Reviews
            </p>
          </span>
          <span className="flex" data-aos='fade-up'>
            <h1>4.8</h1>
            <p>
              Overall Rating
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Middle;