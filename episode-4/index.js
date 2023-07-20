import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './assets/logo.png';
import './index.css';

const Header = () => (
  <div className='header'>
    <div className='logo-container'>
      <img className='logo' src={logo} alt='site-logo' />
    </div>

    <div className='nav-items'>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact</li>
      <li>Cart</li>
    </div>
  </div>
);

const RestaurantCard = () => (
  <div className='restaurant-card'>
    <div className='restaurant-image'>
      <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/tn0duqvypsma052chret' />
    </div>

    <div className='restaurant-details'>
      <h3 className='restaurant-name'>The Tandoori Tales</h3>
      <h4 className='cuisines'>North Indian, Chinese, Mughlai, Biryani</h4>
      <span className='rating'></span>
    </div>
  </div>
);

const Body = () => (
  <div className='body'>
    <div className='search-container'>
      <input type='search' name='query' placeholder='Search for food and restaurants' />
      <button>Search</button>
    </div>

    <div className='restaurant-cards'>
      <RestaurantCard />
    </div>
  </div>
);

const AppLayout = () => (
  <div className='app'>
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
