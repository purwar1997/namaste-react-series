import { BsStarFill } from 'react-icons/bs';
import { RESTAURANT_IMAGE_URL } from '../utils/constants';

const RestaurantCard = ({ restaurantData }) => {
  const { name, avgRating, cuisines, areaName, cloudinaryImageId } = restaurantData?.info;

  return (
    <div className='w-64 hover:scale-95 transition-transform'>
      <div>
        <img className='rounded-xl' src={RESTAURANT_IMAGE_URL + cloudinaryImageId} alt={name} />
      </div>

      <div className='mt-2 flex flex-col items-start gap-0.5'>
        <h3 className='w-full text-lg font-medium text-gray-600 truncate'>{name}</h3>

        <div className='flex items-center gap-2'>
          <span
            className='w-5 h-5 rounded-full flex justify-center items-center'
            style={{
              backgroundColor:
                avgRating > 4.0 ? '#13873F' : avgRating > 3.0 ? '#db7c38' : '#f04343',
            }}
          >
            <BsStarFill className='text-xs text-white ' />
          </span>

          <span>{avgRating}</span>
        </div>

        <p className='w-full truncate'>{cuisines.join(', ')}</p>
        <p className='-mt-0.5'>{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
