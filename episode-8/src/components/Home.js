import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RESTAURANTS_URL } from '../utils/constants';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [displayedRestaurants, setDisplayedRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurantList();
  }, []);

  const fetchRestaurantList = async () => {
    try {
      const response = await fetch(RESTAURANTS_URL);
      const json = await response.json();

      const restaurantList =
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      setRestaurants(restaurantList);
      setDisplayedRestaurants(restaurantList);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const searchRestaurants = () => {
    const searchString = search.trim().toLowerCase();

    let searchResults = restaurants.filter(restaurant => {
      const { name, cuisines } = restaurant?.info;

      return (
        name.toLowerCase().includes(searchString) ||
        cuisines.map(cuisine => cuisine.toLowerCase()).includes(searchString)
      );
    });

    setDisplayedRestaurants(searchResults);
  };

  const filterTopRatedRestuarants = () =>
    setDisplayedRestaurants(
      restaurants
        .filter(restaurant => restaurant?.info?.avgRating > 4.0)
        .sort((res1, res2) => res2.info.avgRating - res1.info.avgRating)
    );

  return loading ? (
    <Shimmer />
  ) : (
    <div className='home'>
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
        <button className='top-rated' onClick={filterTopRatedRestuarants}>
          Top rated
        </button>
      </div>

      <div className='restaurant-list'>
        {displayedRestaurants.map(restaurant => (
          <Link to={`restaurants/${restaurant?.info?.id}`} key={restaurant?.info?.id}>
            <RestaurantCard restaurantData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
