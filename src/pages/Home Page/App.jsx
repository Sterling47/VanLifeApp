import React from 'react';
import { Link } from 'react-router-dom';
import Vans from '../Van List/Vans';
import './home.css';



const App = () => {
  return (
    <div className='App'>
      <h1><span>You</span> got the travel plans <br />We got the <span>Vans</span></h1>
      <Link className='bttn' to='vans' element={<Vans />}>Find your van</Link>
    </div>
  )  
}

export default App;
