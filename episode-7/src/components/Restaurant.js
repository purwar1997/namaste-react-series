import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MENU_URL } from '../utils/constants';
import Shimmer from './Shimmer';
import MenuCategory from './MenuCategory';

const Restaurant = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [restaurantOffers, setRestaurantOffers] = useState([]);
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const [topPicks, setTopPicks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [vegFilter, setVegFilter] = useState(false);
  const { restaurantId } = useParams();

  useEffect(() => {
    fetchRestaurantMenu();
  }, [restaurantId]);

  const fetchRestaurantMenu = async () => {
    try {
      const response = await fetch(MENU_URL + restaurantId);
      const json = await response.json();

      setRestaurantInfo(json?.data?.cards[0].card?.card?.info);
      setRestaurantOffers(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers);

      let menuData = json?.data?.cards?.at(-1)?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      menuData = menuData.slice(1, menuData.length - 2);

      if (menuData[0]?.card?.card?.title === 'Top Picks') {
        setTopPicks(menuData[0]?.card?.card?.carousel);
        setRestaurantMenu(menuData.slice(1));
      } else {
        setRestaurantMenu(menuData);
      }

      setLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  if (loading) {
    return <Shimmer />;
  }

  console.log(restaurantInfo, restaurantOffers, restaurantMenu, topPicks);

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

      <div className='restaurant-offers'></div>

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
