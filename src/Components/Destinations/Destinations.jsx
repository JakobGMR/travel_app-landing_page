import React from 'react';
import './Destinations.css';

import { CiLocationArrow1, CiMoneyCheck1, CiCalendar, CiSearch, CiLocationOn } from "react-icons/ci";

// Imported Images
import image1 from '../../Assets/images/image1.jpg';
import image2 from '../../Assets/images/image2.jpg';
import image3 from '../../Assets/images/image3.jpg';
import image4 from '../../Assets/images/image4.jpg';
import image5 from '../../Assets/images/image5.jpg';
import image6 from '../../Assets/images/image6.jpg';
import image7 from '../../Assets/images/image7.jpg';
import image8 from '../../Assets/images/image8.jpg';

// Array that contains all data detinations
const destinations = [
  {
    id: 1,
    img: image1,
    name: 'Seychelles Island',
    location: 'Indian Ocean',
    rating: 4.7,
  },
  {
    id: 2,
    img: image2,
    name: 'Bora Bora Island',
    location: 'Polynesia',
    rating: 4.3,
  },
  {
    id: 3,
    img: image3,
    name: 'Maldives Island',
    location: 'Indian Ocean',
    rating: 4.9,
  },
  {
    id: 4,
    img: image4,
    name: 'Santorini Island',
    location: 'Greece',
    rating: 4.5,
  },
  {
    id: 5,
    img: image5,
    name: 'Bali Island',
    location: 'Indonesia',
    rating: 4.9,
  },
  {
    id: 6,
    img: image6,
    name: 'Maui Island',
    location: 'Hawaii, USA',
    rating: 4.9,
  },
  {
    id: 7,
    img: image7,
    name: 'Capri Island',
    location: 'Italy',
    rating: 4.7,
  },
  {
    id: 8,
    img: image8,
    name: 'Fiji Island',
    location: 'South Pacific',
    rating: 4.4,
  },
];

const Destinations = () => {
  return (
    <div className='destination section container'>
      <div className="secContainer">
        <div className="secTitle">
          <span className="redText" data-aos='fade-up'>
            EXPLORE NOW
          </span>
          <h3 data-aos='fade-up'>Find Your Dream Destination</h3>
          <p data-aos='fade-up'>
            Fill in the fields below to find the best
            spot for your next tour
          </p>
        </div>

        <div className="searchField flex">
          <div className="inputField flex" data-aos='fade-up'>
            <CiLocationArrow1 className='icon'/>
            <input type="text" placeholder='Location'/>
          </div>
          <div className="inputField flex" data-aos='fade-up'>
            <CiMoneyCheck1 className='icon'/>
            <input type="text" placeholder='Budget'/>
          </div>
          <div className="inputField flex" data-aos='fade-up'>
            <CiCalendar className='icon'/>
            <input type="text" placeholder='Date'/>
          </div>

          <button className='btn flex' data-aos='fade-up'>
            <CiSearch className='icon'/>Search
          </button>
        </div>

        <div className="secMenu">
          <ul className="flex" data-aos='fade-up'>
            <li className="active">All</li>
            <li>Recommended</li>
            <li>Beach</li>
            <li>Park</li>
            <li>Nature</li>
            <li>Mountain</li>
          </ul>
        </div>

        <div className="destinationContainer grid">
          { destinations.map(d => {
            return (<div className="singleDestination" key={d.id} data-aos='fade-up'>
              <div className="imgDiv">
                <img src={d.img} alt="Destination Image"/>
                <div className="descInfo flex">
                  <div className="text">
                    <span className="name">{d.name}</span>
                    <p className='flex'>
                      <CiLocationOn className='icon'/> {d.location}
                    </p>
                  </div>
                  <span className="rating">{d.rating}</span>
                </div>
              </div>
            </div>);
          }) }
        </div>
      </div>
    </div>
  );
}

export default Destinations;