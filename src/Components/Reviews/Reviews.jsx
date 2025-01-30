import React from 'react';
import './Reviews.css';

import { FaStar } from "react-icons/fa";
import image1 from '../../Assets/user1.jpg';
import image2 from '../../Assets/user2.jpg';
import image3 from '../../Assets/user3.jpg';
import image4 from '../../Assets/user4.jpg';
import image5 from '../../Assets/user5.jpg';

const Reviews = () => {
  return (
    <div className='review section container'>
      <div className='secContainer grid'>
        <div className="textDiv">
          <span className="redText" data-aos='fade-up'>
            FROM OUR CLIENTS
          </span>
          <h3 data-aos='fade-up'>Real Travel History From Our Beloved Clients</h3>
          <p data-aos='fade-up'>
            By choosing us as their tour agency,
            customers can expect an
            enriching and enjoyable travel experience,
            filled with unforgettable
            memories that will last a lifetime.
          </p>

          <span className="start flex" data-aos='fade-up'>
            <FaStar className='icon'/>
            <FaStar className='icon'/>
            <FaStar className='icon'/>
            <FaStar className='icon'/>
            <FaStar className='icon'/>
          </span>

          <div className="clientImages flex">
            <img src={image1} alt="Client Image" data-aos='fade-up'/>
            <img src={image2} alt="Client Image" data-aos='fade-up'/>
            <img src={image3} alt="Client Image" data-aos='fade-up'/>
            <img src={image4} alt="Client Image" data-aos='fade-up'/>
          </div>
        </div>
        <div className="imgDiv">
          <img src={image5} alt="Div Image" data-aos='fade-down'/>
        </div>
      </div>
    </div>
  );
}

export default Reviews;