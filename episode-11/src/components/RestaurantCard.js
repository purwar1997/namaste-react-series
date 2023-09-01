import { BsStarFill } from 'react-icons/bs';
import { RESTAURANT_IMAGE_URL } from '../utils/constants';

const RestaurantCard = ({ restaurantData, isTopRated, isPromoted }) => {
  const { name, avgRating, cuisines, areaName, cloudinaryImageId } = restaurantData?.info;

  return (
    <div className={`w-64 ${!isTopRated && 'hover:scale-95 transition-transform'}`}>
      <div>
        <img className='rounded-xl' src={RESTAURANT_IMAGE_URL + cloudinaryImageId} alt={name} />
      </div>

      <div className='mt-2 flex flex-col items-start gap-0'>
        <h3 className='w-full text-lg font-medium text-gray-600 truncate'>{name}</h3>

        <div className='flex items-center gap-2'>
          <span
            className={`w-5 h-5 rounded-full flex justify-center items-center ${
              avgRating > 4.0 ? 'bg-green' : avgRating > 3.0 ? 'bg-yellow' : 'bg-red'
            }`}
          >
            <BsStarFill className='text-xs text-white ' />
          </span>

          <span>{avgRating}</span>
        </div>

        <p className='w-full truncate mt-0.5'>{cuisines.join(', ')}</p>
        <p>{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;

// Higher Order Components are functions which accepts component as an argument and returns a new component
// Component returned by HOC is actually a wrapper around original component that was passed inside it
// HOC should be pure functions which means they shouldn't modify the input component

export const topRatedRestaurant = Restaurant => {
  return props => {
    return (
      <div className='relative hover:scale-95 transition-transform'>
        <label className='absolute pl-3 pr-2 py-1 text-sm text-white bg-green rounded-tl-xl z-10'>
          Top Rated
        </label>
        <Restaurant {...props} isTopRated={true} />
      </div>
    );
  };
};

export const promotedRestaurant = Restaurant => {
  return props => {
    return (
      <div className='relative hover:scale-95 transition-transform'>
        <label className='absolute pl-3 pr-2 py-1 text-sm text-white bg-green rounded-tl-xl z-10'>
          Promoted
        </label>
        <Restaurant {...props} isPromoted={true} />
      </div>
    );
  };
};
