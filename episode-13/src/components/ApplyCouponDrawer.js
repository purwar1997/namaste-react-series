import { useState, useEffect } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { openModal } from '../utils/helpers';
import { RESTAURANT_INFO_URL } from '../utils/constants';
import CouponCard from './CouponCard';
import Spinner from './Spinner';

const ApplyCouponDrawer = ({
  restaurantId,
  setCouponCode,
  setOpenCouponModal,
  closeCouponDrawer,
  openDrawer,
}) => {
  const [offers, setOffers] = useState([]);
  const [couponInput, setCouponInput] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRestaurantOffers = async () => {
      try {
        const response = await fetch(RESTAURANT_INFO_URL + restaurantId);
        const json = await response.json();
        setOffers(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers);
      } catch (err) {
        console.log(err.message);
      }
    };

    if (openDrawer) {
      setOffers([]);
      setCouponInput('');
      setError(null);
      getRestaurantOffers();
    }
  }, [openDrawer, restaurantId]);

  const verifyCouponCode = () => {
    const isCouponValid = offers.some(
      offer => offer?.info?.couponCode.split(' ')[1] === couponInput
    );

    if (isCouponValid) {
      setCouponCode(couponInput);
      closeCouponDrawer();
      openModal(setOpenCouponModal);
    } else {
      setError('Coupon does not exist');
    }
  };

  const handleScroll = event => {
    const couponListHeader = document.querySelector('#coupon-list-header');

    if (event.target.scrollTop > 0) {
      couponListHeader.classList.add('on-scroll');
    } else {
      couponListHeader.classList.remove('on-scroll');
    }
  };

  return (
    <div
      className={`fixed top-0 right-0 h-screen w-[500px] bg-white z-40 flex flex-col overflow-y-auto transition-transform duration-500 ${
        openDrawer ? 'translate-x-0' : 'translate-x-full'
      }`}
      onScroll={handleScroll}
    >
      <div
        className='px-10 py-8 flex flex-col items-start gap-9 sticky top-0 bg-white z-10'
        id='coupon-list-header'
      >
        <div className='text-lg cursor-pointer' onClick={closeCouponDrawer}>
          <RxCross1 />
        </div>

        <div className='w-full'>
          <div className='border border-gray-300 flex'>
            <input
              className='h-12 px-4 flex-1 focus:outline-0'
              type='text'
              name='couponCode'
              placeholder='Enter coupon code'
              value={couponInput}
              onChange={e => setCouponInput(e.target.value.trim().toUpperCase())}
            />
            <button
              className='h-12 px-6 bg-orange text-white font-medium'
              onClick={verifyCouponCode}
              disabled={couponInput === ''}
            >
              Apply
            </button>
          </div>

          {error && <p className='mt-2.5 text-sm text-red'>{error}</p>}
        </div>
      </div>

      {offers.length === 0 ? (
        <div className='flex-1 flex justify-center items-center'>
          <Spinner />
        </div>
      ) : (
        <div className='mx-10 mb-8 border border-gray-300'>
          {offers.map(offer => (
            <CouponCard
              key={offer?.info?.offerIds[0]}
              couponInfo={offer?.info}
              setCouponCode={setCouponCode}
              setOpenCouponModal={setOpenCouponModal}
              closeCouponDrawer={closeCouponDrawer}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ApplyCouponDrawer;
