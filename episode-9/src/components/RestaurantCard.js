import { RESTAURANT_IMAGE_URL } from '../utils/constants';

const RestaurantCard = ({ restaurantData }) => {
  const {
    name,
    costForTwo,
    avgRating,
    cuisines,
    cloudinaryImageId,
    sla: { deliveryTime },
  } = restaurantData?.info;

  return (
    <div className='restaurant-card'>
      <div className='restaurant-image'>
        <img src={RESTAURANT_IMAGE_URL + cloudinaryImageId} alt={name} />
      </div>

      <div className='restaurant-details'>
        <h3 className='name'>{name}</h3>
        <h3 className='cuisines'>{cuisines.slice(0, 5).join(', ')}</h3>

        <div>
          <span
            className={`rating ${avgRating > 4.0 ? 'good' : avgRating > 3.0 ? 'average' : 'bad'}`}
          >
            {avgRating}
          </span>
          <span className='dash' />
          <span className='delivery-time'>{deliveryTime} mins</span>
          <span className='dash' />
          <span className='price'>{costForTwo}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
