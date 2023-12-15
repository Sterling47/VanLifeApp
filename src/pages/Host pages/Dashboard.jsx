import React from 'react'
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className='center'>
        <div className="welcomeDash">
          <h2>Welcome!</h2>
          <p>Income last <span>30 days</span></p>
          <p className='amount'>$2,260</p>
        </div>
        <div className="reviewDash">
          <h3>Review Score</h3>
        </div> 
        <div className="dashVans">
          <h2>Your Listed Vans</h2>
          <Link className='dashLink' to=''></Link>
          <Link className='dashLink' to=''></Link>
          <Link className='dashLink' to=''></Link>
        </div>
    </div>
  )
}

export default Dashboard;