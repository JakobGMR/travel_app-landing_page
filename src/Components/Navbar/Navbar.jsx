import React, { useState } from 'react';
import './Navbar.css';

import { SiAlliedmodders } from "react-icons/si";
import { RxCross1 } from "react-icons/rx";
import { CiCircleList } from "react-icons/ci";

const Navbar = () => {
    // state to track and update navbar
    const [navBar, setNavbar] = useState('menu');
    // Function to show navbar
    const showNavbar = () => {
        setNavbar('menu showNavbar');
    };
    // Function to remove navbar
    const removeNavbar = () => {
        setNavbar('menu');
    };

  return (
    <div className='navBar'>
        <div className='logoDiv'>
            <SiAlliedmodders className='icon' />
            <span>OU-Trips</span>
        </div>

        <div className={navBar}>
            <ul>
                <li className='navList'>
                    Destination
                </li>
                <li className='navList'>
                    About Us
                </li>
                <li className='navList'>
                    Testimonial
                </li>
                <li className='navList'>
                    Gallery
                </li>
            </ul>

            {/* Icon to remove Navbar */}
            <RxCross1 className='icon closeIcon' onClick={removeNavbar} />
        </div>

        <button className="signUnBtn btn">Sign Up</button>
        {/* Icon to toggle Navbar */}
        <CiCircleList className='icon menuIcon' onClick={showNavbar} />

    </div>
  );
}

export default Navbar;