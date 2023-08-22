import { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import useFetchRestaurants from '../utils/useFetchRestaurants';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';

const Home = () => {
  const [search, setSearch] = useState('');
  const [displayedRestaurants, setDisplayedRestaurants] = useState(null);

  const isOnline = useOutletContext();
  const restaurants = useFetchRestaurants();

  if (!isOnline) {
    return (
      <h1 className='offline-message'>
        Looks like you are offline. Please check your internet connection.
      </h1>
    );
  }

  if (restaurants.length === 0) {
    return <Shimmer />;
  }

  if (displayedRestaurants === null) {
    setDisplayedRestaurants(restaurants);
  }

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

  return (
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
        {displayedRestaurants?.map(restaurant => (
          <Link to={`restaurants/${restaurant?.info?.id}`} key={restaurant?.info?.id}>
            <RestaurantCard restaurantData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
