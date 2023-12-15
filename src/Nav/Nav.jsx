import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'

const Nav = () => {

  return (
    <div className="center">
      <nav className='mainNav'>
        <div className='homeLink'>
          <NavLink className='vanLife' to='/'><h1>VANLIFE</h1></NavLink>
        </div>  
        
        <div className='vanNavLink'>
          <NavLink className={({isActive}) => isActive ? 'bttnActive' : 'bttn'} to="/host" >Hosts</NavLink>
          <NavLink className={({isActive}) => isActive ? 'bttnActive' : 'bttn'} to="/about" >Abouts</NavLink>
          <NavLink className={({isActive}) => isActive ? 'bttnActive' : 'bttn'} to='/vans' >Vans</NavLink>
        </div>
      </nav>
    </div>
  )
}
export default Nav;