import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/Home Page/App.jsx';
import Vans from './pages/Van List/Vans.jsx';
import RentPage from './pages/Rent Page/RentPage.jsx';
import About from './pages/about page/About.jsx';
import './index.css';
import './server.js';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Dashboard from './pages/Host pages/Dashboard.jsx';
import Reviews from './pages/Host pages/Reviews.jsx';
import Income from './pages/Host pages/Income.jsx';
import Host from './components/Host.jsx';
import YourVans from './pages/Host pages/YourVans.jsx';
import ListedVan from './pages/Host pages/ListedVan.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} />
        <Route path="vans/:id" element={<RentPage />} />
        
        <Route path='host' element={<Host />}> 
          <Route index element={<Dashboard />} />
          <Route path='reviews' element={<Reviews />} />
          <Route path='income' element={<Income />} />
          <Route path='vans' element={<YourVans />} />
          <Route path='vans/:hostId' element={<YourVans />} />
        </Route>  
       </Route>          
    </Routes>
  </BrowserRouter>
);
