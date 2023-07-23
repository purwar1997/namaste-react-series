import React from 'react';
import ReactDOM from 'react-dom/client';
import fs from 'fs';
import logo from './assets/logo.png';
import './index.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='logo-container'>
        <img className='logo' src={logo} alt='swiggy-logo' />
      </div>

      <div className='nav-items'>
        <li>Home</li>
        <li>About</li>
        <li>Pricing</li>
        <li>Contact Us</li>
      </div>
    </header>
  );
};

const RestaurantCard = ({ restaurantData }) => {
  const {
    name,
    costForTwo,
    avgRating,
    cuisines,
    cloudinaryImageId,
    sla: { deliveryTime },
  } = restaurantData?.info;

  return (
    <div className='restaurant-card'>
      <div className='restaurant-image'>
        <img
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
          alt={name}
        />
      </div>

      <div className='restaurant-details'>
        <h3 className='name'>{name}</h3>
        <h3 className='cuisines'>{cuisines.join(', ')}</h3>

        <div>
          <span
            className={`rating ${avgRating > 4.0 ? 'good' : avgRating > 3.0 ? 'average' : 'bad'}`}
          >
            {avgRating}
          </span>
          <span className='delivery-time'>{deliveryTime} mins</span>
          <span className='price'>{costForTwo}</span>
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  const restaurantList = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

  return (
    <div className='body'>
      <div className='search-container'>
        <input
          className='search-input'
          type='search'
          name='query'
          placeholder='Search for food and restaurants'
        />
        <button className='search-btn'>Search</button>
      </div>

      <div className='restaurant-list'>
        {restaurantList.map(restaurant => (
          <RestaurantCard key={restaurant?.info?.id} restaurantData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
