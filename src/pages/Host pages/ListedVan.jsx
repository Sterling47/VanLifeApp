import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ListedVan = () => {
  const params = useParams();
  const [vans, setVan] = useState(null)

useEffect(() => {
  fetch(`/api/hosts/vans/${params.hostId}`)
  .then(res => res.json())
  .then(data => setVan(data.vans)) 
}, [params.hostId]);

  return (
    <div className='center'>
        ListedVan
        <div className="vanBox">
          <div>
            <img src={vans.imageUrl} alt="pic here" />
          </div>
        </div>
    </div>
  )
}

export default ListedVan