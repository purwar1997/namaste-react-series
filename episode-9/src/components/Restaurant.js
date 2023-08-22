import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import MenuCategory from './MenuCategory';
import TopPicksCarousel from './TopPicksCarousel';
import OfferCarousel from './OfferCarousel';
import useFetchRestaurantData from '../utils/useFetchRestaurantData';

const Restaurant = () => {
  const [vegFilter, setVegFilter] = useState(false);
  const { restaurantId } = useParams();

  const restaurantData = useFetchRestaurantData(restaurantId);

  if (restaurantData === null) {
    return <Shimmer />;
  }

  const restaurantInfo = restaurantData?.cards[0]?.card?.card?.info;

  const restaurantOffers =
    restaurantData?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers;

  let menuData = restaurantData?.cards?.at(-1)?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  menuData = menuData.slice(1, menuData.length - 2);

  let topPicks, restaurantMenu;

  if (menuData[0]?.card?.card?.title === 'Top Picks') {
    topPicks = menuData[0]?.card?.card?.carousel;
    restaurantMenu = menuData.slice(1);
  } else {
    restaurantMenu = menuData;
  }

  const {
    name,
    avgRating,
    costForTwoMessage,
    cuisines,
    locality,
    totalRatingsString,
    sla: { slaString },
  } = restaurantInfo;

  return (
    <div className='restaurant'>
      <div className='restaurant-info'>
        <div className='restaurant-info-header'>
          <div className='restaurant-name-address-wrapper'>
            <h3 className='restaurant-name'>{name}</h3>
            <p className='restaurant-cuisines'>{cuisines.join(', ')}</p>
            <p className='restaurant-address'>{locality}</p>
          </div>

          <div className='restaurant-ratings-wrapper'>
            <h4
              className='average-rating'
              style={{
                color: avgRating > 4.0 ? '#3D9B6D' : avgRating > 3.0 ? '#db7c38' : ' #f04343',
              }}
            >
              {avgRating}
            </h4>
            <p className='total-ratings'>{totalRatingsString}</p>
          </div>
        </div>

        <div className='restaurant-cost-time-wrapper'>
          <span className='delivery-time'>{slaString}</span>
          <span className='cost-for-two'>{costForTwoMessage}</span>
        </div>
      </div>

      {restaurantOffers && <OfferCarousel offers={restaurantOffers} />}

      <div className='restaurant-menu'>
        <div className='veg-filter'>
          <label htmlFor='veg-only'>Veg Only</label>
          <input
            type='checkbox'
            name='veg-filter'
            id='veg-only'
            checked={vegFilter}
            onChange={e => setVegFilter(e.target.checked)}
          />
        </div>

        {topPicks > 0 && <TopPicksCarousel topPicks={topPicks} />}

        <div className='menu-categories'>
          {restaurantMenu.map((menuCategory, index) => (
            <MenuCategory key={index} menuCategory={menuCategory} vegFilter={vegFilter} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
