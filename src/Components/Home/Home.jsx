import React, { useEffect } from 'react';
import './Home.css';

// animation Library
import AOS from 'aos';
import 'aos/dist/aos.css';

import { CiPlay1 } from "react-icons/ci";

import Video from '../../Assets/videos/video.mp4';
import img1 from '../../Assets/home-img1.jpg';
import img2 from '../../Assets/home-img2.jpg';
import img3 from '../../Assets/home-img3.jpg';
import img4 from '../../Assets/home-img4.jpg';

const Home = () => {
    // Init animation elements library
    useEffect(()=>{
        AOS.init({duration: 2000});
    }, []);

  return (
    <div className='Home'>
        <div className='videoBg'>
            <video src={Video} autoPlay loop muted></video>
        </div>

        <div className="sectionText">
            <h1 data-aos='fade-up'>Unlock Your Travel Dreams With Us!</h1>
            <p>
                Discover the world's most adventures nature,
                life is so short for a
                trip.
            </p>
            <button className='btn flex'>
                GET STARTED <CiPlay1 className='icon'/>
            </button>
        </div>

        <div className="popularPlaces">
            <div className="content">
                <h3 data-aos='fade-up'>Popular Places</h3>
                <div className="images flex" data-aos='fade-up'>
                    <img src={img1} alt=""/>
                    <img src={img2} alt=""/>
                    <img src={img3} alt=""/>
                    <img src={img4} alt=""/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;