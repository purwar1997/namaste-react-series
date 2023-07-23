import RestaurantCard from './RestaurantCard';
import { restaurantList } from '../utils/mockData';

const Body = () => {
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

export default Body;
