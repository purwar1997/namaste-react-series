import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import useFetchRestaurants from '../utils/useFetchRestaurants';
import RestaurantCard, { topRatedRestaurant, promotedRestaurant } from './RestaurantCard';
import { updateUser } from '../utils/userSlice';
import Shimmer from './Shimmer';

const Home = () => {
  const [search, setSearch] = useState('');
  const [displayedRestaurants, setDisplayedRestaurants] = useState(null);
  const userInfo = useSelector(store => store.user);
  const dispatch = useDispatch();

  const restaurants = useFetchRestaurants();

  if (restaurants.length === 0) {
    return <Shimmer />;
  }

  if (displayedRestaurants === null) {
    setDisplayedRestaurants(restaurants);
  }

  const TopRatedRestaurantCard = topRatedRestaurant(RestaurantCard);
  const PromotedRestaurantCard = promotedRestaurant(RestaurantCard);

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
    <div className='px-24 py-12'>
      {/* <div className='search-container'>
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
      </div> */}

      {/* <div className='filters'>
        <button className='top-rated' onClick={filterTopRatedRestuarants}>
          Top rated
        </button>
      </div> */}

      <div className='mb-8 flex items-center gap-3'>
        <label htmlFor='username'>Username</label>
        <input
          className='border border-gray-300 focus:outline-0 px-2 py-1 rounded'
          type='text'
          name='username'
          id='username'
          value={userInfo.name}
          onChange={e =>
            dispatch(updateUser({ type: 'UPDATE_USERNAME', userName: e.target.value }))
          }
        />
      </div>

      <div className='grid grid-cols-4 gap-10 justify-items-center'>
        {displayedRestaurants?.map(restaurant => (
          <Link to={`restaurants/${restaurant?.info?.id}`} key={restaurant?.info?.id}>
            {restaurant?.info?.avgRating > 4.0 ? (
              <TopRatedRestaurantCard restaurantData={restaurant} />
            ) : (
              <RestaurantCard restaurantData={restaurant} />
            )}

            {/* {restaurant?.info?.promoted ? (
              <PromotedRestaurantCard restaurantData={restaurant} />
            ) : (
              <RestaurantCard restaurantData={restaurant} />
            )} */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
