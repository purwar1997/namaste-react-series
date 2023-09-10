import { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import useFetchRestaurantData from '../utils/useFetchRestaurantData';
import CouponCard from './CouponCard';

const ApplyCoupon = ({ restaurantId, couponCode, setCouponCode, closeCouponList }) => {
  const [couponInput, setCouponInput] = useState('');
  const [error, setError] = useState(null);
  const restaurant = useFetchRestaurantData(restaurantId);

  if (restaurant === null) {
    return;
  }

  const offers = restaurant?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers;
  console.log(offers);

  const verifyCouponCode = () => {
    const isCouponValid = offers.some(
      offer => offer?.info?.couponCode.split(' ')[1] === couponInput
    );

    if (isCouponValid) {
      setCouponCode(couponInput);
      closeCouponList();
    } else {
      setError('Coupon does not exist');
    }
  };

  return (
    <div className='fixed top-0 left-0 w-full bg-black/40 z-20 flex justify-end'>
      <div className='h-screen w-[500px] bg-white px-10 py-8 flex flex-col gap-9 overflow-y-auto'>
        <div className='text-lg self-start cursor-pointer' onClick={closeCouponList}>
          <RxCross1 />
        </div>

        <div>
          <div className='w-full border border-gray-300 flex'>
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

        <div className='border border-gray-300'>
          {offers.map(offer => (
            <CouponCard
              key={offer?.info?.offerIds[0]}
              couponInfo={offer?.info}
              setCouponCode={setCouponCode}
              closeCouponList={closeCouponList}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplyCoupon;
