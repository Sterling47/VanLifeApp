import React from 'react'
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../../server'

const YourVans = () => {

  const [vans, setVan] = useState([]);

  useEffect(() => {
    fetch(`/api/host/vans/`)
    .then(res => res.json())
    .then(data => setVan(data.vans))
  }, []);


  const hostVans = vans.map(van => (
    <NavLink to={`/host/vans/${van.id}`} key={van.id} className='vanBoxWrapper'>
      <div key={van.id} className='vanBox'>
        <img src={van.imageUrl} alt={`photo of ${van.name}`} />
        <div className="vanHostInfo">
          <h3>{van.name}</h3>
          <p>{van.price}/day</p>
        </div>
      </div>
    </NavLink>
  ));

  return (
    <div className='center'>
      <h1>
        Your Listed Vans
      </h1>
      {hostVans}
      
      
    </div>
  )
};

export default YourVans;