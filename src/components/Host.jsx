import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import './../pages/Host pages/hostPortal.css'

const Host = () => {

  const hpLinkActive = {
    textDecoration: 'none',
    padding: '0.4rem',
    color: 'rgb(186, 35, 35)',
    fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
  }
  const hpLink ={
    textDecoration: 'none',
    color: 'rgb(141, 128, 128)',
    padding: '0.4rem',
  }

  return (
    <div className='center'>
        <nav className="hostNav">
          <NavLink to='' end style={({isActive}) => isActive ? hpLinkActive : hpLink }>Dashboard</NavLink>
          <NavLink to='reviews' style={({isActive}) => isActive ? hpLinkActive : hpLink }>Reviews</NavLink>
          <NavLink to='vans' style={({isActive}) => isActive ? hpLinkActive : hpLink}>Vans</NavLink>
          <NavLink to='income' style={({isActive}) => isActive ? hpLinkActive : hpLink}>Income</NavLink>
        </nav>
        <Outlet/>
    </div>
        
  )
}

export default Host;