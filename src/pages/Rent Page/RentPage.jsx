import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import '../../server';
import './rent.css'


const RentPage = () => {
    const params = useParams();
    const [van, setVan] = useState(null);

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setVan(data.vans))
       
    }, [params.id]);

    

    return (
        <div className="center">
        { van ? (
            <div className='detail' >
                <img src={van.imageUrl} alt="" />
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                <h2>{van.name}</h2>
                <p className="van-price"><span>${van.price}</span>/day</p>
                <p>{van.description}</p>
                <button className="link-button">Rent this van</button>
            </div>
        ) : (
            <div className='detail' >
              <h2>Loading....</h2>  
            </div>     
        )}
    </div> );
}

export default RentPage;