import React from 'react';
import './Footer.css';
import { SiAlliedmodders } from 'react-icons/si';
import { FaFacebook, FaXTwitter, FaInstagram   } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo" data-aos='fade-up'>
            <SiAlliedmodders className='icon'/>
            <span>OU-Trips</span>
          </div>
            
            <div className="socials flex" data-aos='fade-up'>
              <FaFacebook className='icon'/>
              <FaXTwitter className='icon'/>
              <FaInstagram className='icon'/>
            </div>
        </ div>

        <div className="footerLinks" data-aos='fade-up'>
          <span className='linkTitle'>
            Information
          </span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </div>

        <div className="footerLinks" data-aos='fade-up'>
          <span className='linkTitle'>
            Helpful Links
          </span>
          <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Travel & Condition</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
        </div>

        <div className="footerLinks" data-aos='fade-up'>
          <span className='linkTitle'>
            Contact Details
          </span>
          <span className='phone'>+651 125 658</span>
          <span className='email'>jakobGMR2@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;