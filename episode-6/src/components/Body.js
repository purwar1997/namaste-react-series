import { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';

const Body = () => {
  let [restaurants, setRestaurants] = useState([]);
  let [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchRestaurantList();
  }, []);

  const fetchRestaurantList = async () => {
    try {
      const response = await fetch(
        'https://www.swiggy.com/mapi/homepage/getCards?lat=28.57157&lng=77.381963'
      );

      const json = await response.json();

      const restaurantList =
        json?.data?.success?.cards[5]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;

      restaurants = restaurantList;
      // setRestaurants(restaurantList);
      // setLoading(false);
      loading = false;
    } catch (err) {
      console.log(err.message);
    }
  };

  const searchRestaurants = () => {
    const searchString = search.trim().toLowerCase();

    let searchResults = restaurants.filter(restaurant => {
      const { name, cuisines } = restaurant?.info;

      return (
        name.toLowerCase() === searchString ||
        cuisines.map(cuisine => cuisine.toLowerCase()).includes(searchString)
      );
    });

    setRestaurants(searchResults);
  };

  // Conditional Rendering
  return loading ? (
    <Shimmer />
  ) : (
    <div className='body'>
      <div className='search-container'>
        <input
          className='search-input'
          type='search'
          name='query'
          placeholder='Search for food and restaurants'
          value={search}
          onChange={event => setSearch(event.target.value)}
        />
        <button className='search-btn' onClick={searchRestaurants} disabled={search.trim() === ''}>
          Search
        </button>
      </div>

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
