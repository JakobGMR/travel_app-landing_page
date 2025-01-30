import React from 'react';
import './Subscribe.css';

import img from '../../Assets/ladyCalling.jpg';

const Subscribe = () => {
  return (
    <div className='subscribe section container'>
      <div className="secContainer grid">
        <img src={img} alt="Div Image" data-aos='fade-down'/>

        <div className="textDiv">
          <h4 data-aos='fade-up'>Best way To Start Your Journey!</h4>
          <p data-aos='fade-up'>
            We offer personalized itineraries tailored to
            individual preferences
            and interests.
          </p>
          <button className='btn' data-aos='fade-up'>Start Here</button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;