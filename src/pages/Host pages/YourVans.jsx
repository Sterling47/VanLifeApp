import React from 'react'
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../../server'

const YourVans = () => {
  const params = useParams();
  const [vans, setVan] = useState([]);

  useEffect(() => {
    fetch(`/api/host/vans/${params.hostId}`)
    .then(res => res.json())
    .then(data => setVan(data.vans))
       console.log(params)
  }, [params.hostId]);


  const hostVans = vans.map(van => (
    <div key={van.id} className='vanBox'>
      <NavLink to={`/host/vans/${van.id}`}> 
        <img src={van.imageUrl} alt="img" />
      </NavLink>
    </div>
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