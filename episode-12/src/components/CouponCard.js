import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { DEFAULT_OFFER_LOGO_URL } from '../utils/constants';

const CouponCard = ({ couponInfo, setCouponCode, closeCouponList }) => {
  const [showMore, setShowMore] = useState(false);

  const { couponCode, header, description } = couponInfo;

  return (
    <div className='p-7 border-b border-dashed border-gray-300 last:border-none flex flex-col items-start gap-5'>
      <div className='flex items-center gap-3 bg-lightOrange px-3 py-1.5 border border-gray-300'>
        <img className='w-5' src={DEFAULT_OFFER_LOGO_URL} />
        <span>{couponCode.split(' ')[1]}</span>
      </div>

      <div className=''>
        <h3 className='font-medium'>{header}</h3>
        <p className='mt-1 text-xs'>
          {'Use code TRYNEW & get 40% off on orders above ₹159' || description}
        </p>
      </div>

      {!showMore && (
        <button
          className='flex gap-1.5 items-center text-sm text-blue-800'
          onClick={() => setShowMore(true)}
        >
          <AiOutlinePlus />
          <span>More</span>
        </button>
      )}

      {showMore && (
        <div>
          <h5>Terms and Conditions</h5>

          <ul>
            <li>Offer is valid only on select restaurants</li>
            <li>Offer valid till Sep 10, 2023 11:59 PM</li>
            <li>Other T&Cs may apply</li>
          </ul>
        </div>
      )}

      <button className='bg-white border border-orange px-4 py-2.5 text-orange text-sm font-medium uppercase'>
        Apply Coupon
      </button>
    </div>
  );
};

export default CouponCard;
