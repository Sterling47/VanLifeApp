import React from 'react';
import { useEffect, useState } from 'react';
import '../../server'
import { Link } from 'react-router-dom';
import './vans.css';

export default function Vans() {
  const [vans, setVans] = useState([])
    useEffect(() => {
      fetch("/api/vans")
          .then(res => res.json())
          .then(data => setVans(data.vans))
  }, []);

  const vanElements = vans.map(van => (
      <div key={van.id} className="van-tile">
          <Link to={`${van.id}`}> 
          <img src={van.imageUrl} />
          <div className="van-info">
              <h3>{van.name}</h3>
              <p>${van.price}<span>/day</span></p>
          </div>
          </Link>
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </div>
  ));


  return (
    <div className='center'>
      <h1>Our Beautiful Vans</h1>
      {vanElements}
    </div>
  );
};