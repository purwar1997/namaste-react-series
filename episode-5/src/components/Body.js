import { useState, useEffect } from '../../node_modules/react';
import RestaurantCard from './RestaurantCard';

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://www.swiggy.com/mapi/homepage/getCards?lat=12.9715987&lng=77.5945627'
      );

      const json = await response.json();

      const restaurantList =
        json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;

      setRestaurants(restaurantList);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

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
