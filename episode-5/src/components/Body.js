import { useState } from '../../node_modules/react';
import RestaurantCard from './RestaurantCard';
import { restaurantList } from '../utils/mockData';

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);

  return (
    <div className='body'>
      {/* <div className='search-container'>
        <input
          className='search-input'
          type='search'
          name='query'
          placeholder='Search for food and restaurants'
        />
        <button className='search-btn'>Search</button>
      </div> */}

      <div className='filters'>
        <button
          className='top-rated'
          onClick={() =>
            setRestaurants(restaurants.filter(restaurant => restaurant?.info?.avgRating > 4.0))
          }
        >
          Top rated
        </button>
      </div>

      <div className='restaurant-list'>
        {restaurants.map(restaurant => (
          <RestaurantCard key={restaurant?.info?.id} restaurantData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
