import { BsStarFill } from 'react-icons/bs';
import { RESTAURANT_IMAGE_URL } from '../utils/constants';

const RestaurantCard = ({ restaurantData }) => {
  console.log(restaurantData?.info);

  const { name, avgRating, cuisines, areaName, cloudinaryImageId, aggregatedDiscountInfoV3 } =
    restaurantData?.info;

  const { header, subHeader } = aggregatedDiscountInfoV3;

  const getRatingColor = rating =>
    rating > 4.0 ? '#13873F' : rating > 3.0 ? '#db7c38' : '#f04343';

  return (
    <div className='w-64'>
      <div>
        <img className='rounded-xl' src={RESTAURANT_IMAGE_URL + cloudinaryImageId} alt={name} />
      </div>

      <div className='mt-2 flex flex-col items-start gap-0.5'>
        <h3 className='text-lg font-medium text-gray-600'>{name}</h3>

        <div className='flex items-center gap-2'>
          <span
            className='w-5 h-5 rounded-full flex justify-center items-center'
            style={{ backgroundColor: getRatingColor(avgRating) }}
          >
            <BsStarFill className='text-xs text-white ' />
          </span>

          <span>{avgRating}</span>
        </div>

        <p>{cuisines.slice(0, 3).join(', ')}</p>
        <p className='-mt-0.5'>{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
