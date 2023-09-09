import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsStarFill } from 'react-icons/bs';
import { IoTimeOutline } from 'react-icons/io5';
import { HiOutlineCurrencyRupee } from 'react-icons/hi2';
import Shimmer from './Shimmer';
import MenuCategory from './MenuCategory';
import TopPicksCarousel from './TopPicksCarousel';
import OfferCarousel from './OfferCarousel';
import ViewCartBar from './ViewCartBar';
import useFetchRestaurantData from '../utils/useFetchRestaurantData';
import RestaurantContext from '../context/RestaurantContext';

const Restaurant = () => {
  const [vegFilter, setVegFilter] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuIndex, setShowMenuIndex] = useState(null);
  const cartItems = useSelector(store => store.cart);
  const { restaurantId } = useParams();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

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
    areaName,
    totalRatingsString,
    sla: { slaString },
  } = restaurantInfo;

  return (
    <div className='w-calc m-auto py-10'>
      <div>
        <div className='pb-4 flex justify-between items-start border-b border-dashed border-gray-300'>
          <div>
            <h3 className='text-xl font-semibold'>{name}</h3>
            <p className='mt-1 text-sm'>{cuisines.join(', ')}</p>
            <p className='mt-0.5 text-sm'>{areaName}</p>
          </div>

          <div className='border border-gray-200 rounded-lg px-2.5 py-2 flex flex-col items-center gap-2'>
            <div
              className={`flex items-center gap-2 ${
                avgRating > 4.0 ? 'text-green' : avgRating > 3.0 ? 'text-yellow' : 'text-red'
              }`}
            >
              <BsStarFill />
              <span className='font-semibold'>{avgRating}</span>
            </div>

            <div className='w-full h-px bg-gray-200' />
            <p className='text-sm'>{totalRatingsString}</p>
          </div>
        </div>

        <div className='pt-4 flex gap-7'>
          <div className='flex items-center gap-2'>
            <IoTimeOutline className='text-2xl' />
            <span className='font-medium'>{slaString}</span>
          </div>

          <div className='flex items-center gap-2'>
            <HiOutlineCurrencyRupee className='text-2xl' />
            <span className='font-medium'>{costForTwoMessage}</span>
          </div>
        </div>
      </div>

      {restaurantOffers && <OfferCarousel offers={restaurantOffers} />}

      <div className='mt-8'>
        <div className='pb-3 border-b border-gray-300 cursor-pointer'>
          <label htmlFor='veg-only'>Veg Only</label>
          <input
            className='ml-2 relative top-px cursor-pointer'
            type='checkbox'
            name='veg-filter'
            id='veg-only'
            checked={vegFilter}
            onChange={e => setVegFilter(e.target.checked)}
          />
        </div>

        <RestaurantContext.Provider value={restaurantId}>
          {topPicks && <TopPicksCarousel topPicks={topPicks} />}

          <div className={topPicks ? 'mt-10' : 'mt-4'}>
            {restaurantMenu.map((menuCategory, index) => (
              <MenuCategory
                key={index}
                menuCategory={menuCategory}
                vegFilter={vegFilter}
                showMenu={index === showMenuIndex ? showMenu : false}
                setShowMenu={setShowMenu}
                setShowMenuIndex={() => setShowMenuIndex(index)}
              />
            ))}
          </div>
        </RestaurantContext.Provider>
      </div>

      {cartItems.length > 0 && <ViewCartBar cartItems={cartItems} />}
    </div>
  );
};

export default Restaurant;
