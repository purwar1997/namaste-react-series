import React from 'react';
import ReactDOM from 'react-dom/client';
import fs from 'fs';
import logo from './assets/logo.png';
import './index.css';

const Header = () => {
  return (
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
};

const RestaurantCard = ({ restaurantData }) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = restaurantData?.info;

  return (
    <div className='restaurant-card'>
      <div className='restaurant-image'>
        <img
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
        />
      </div>

      <div className='restaurant-details'>
        <h3 className='restaurant-name'>{name}</h3>
        <h4 className='cuisines'>{cuisines.slice(0, 3).join(', ')}</h4>

        <div>
          <span
            className={`rating ${avgRating > 4.0 ? 'high' : avgRating > 3.0 ? 'low' : 'very-low'}`}
          >
            {avgRating}
          </span>
          <span className='price'>{costForTwo}</span>
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  const restaurantList = JSON.parse(fs.readFileSync('data.json', 'utf8'));

  return (
    <div className='body'>
      <div className='search-container'>
        <input type='search' name='query' placeholder='Search for food and restaurants' />
        <button>Search</button>
      </div>

      <div className='restaurant-cards'>
        {restaurantList.map(restaurantData => (
          <RestaurantCard key={restaurantData?.info?.id} restaurantData={restaurantData} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
