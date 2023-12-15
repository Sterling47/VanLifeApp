import React from 'react'
import abtImg from '../../assets/image54.png';
import { Link } from 'react-router-dom';
import './about.css';


const About = () => {
  return (
    <div className="center">
      
      <img src={abtImg} alt="van image" />
      <div className="aboutPage">
        <h2>Dont Squeeze in a sedan when you can rent a van!</h2>
        <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. Hitch costs extra 😉</p>
      </div>
      <div className="destination">
        <h2>Your destination is waiting.</h2>
        <Link className='destBttn' to='/vans'>Explore our vans</Link>
      </div>
    </div>
)
}

export default About;