import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiSolidOffer } from 'react-icons/bi';
import { CART_IMAGE_URL } from '../utils/constants';
import { calculateCartTotal } from '../utils/helpers';
import CartItem from './CartItem';
import Backdrop from './Backdrop';
import ApplyCouponDrawer from './ApplyCouponDrawer';
import CouponAppliedModal from './CouponAppliedModal';

const Cart = ({ cartInfo }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [couponCode, setCouponCode] = useState(null);
  const [openCouponModal, setOpenCouponModal] = useState(false);

  const { name, areaName, cloudinaryImageId, id } = cartInfo.restaurant;

  const cartTotal = calculateCartTotal(cartInfo.items);
  const deliveryFee = cartTotal > 500 ? 50 : 70;
  const gstCharges = cartTotal > 700 ? 150 : 100;

  const handleScroll = event => {
    const cartHeader = document.querySelector('#cart-header');

    if (event.target.scrollTop > 0) {
      cartHeader.classList.add('on-scroll');
    } else {
      cartHeader.classList.remove('on-scroll');
    }
  };

  const openCouponDrawer = () => {
    setOpenDrawer(true);
    document.body.classList.add('disable-scroll');
  };

  const closeCouponDrawer = () => {
    setOpenDrawer(false);
    document.body.classList.remove('disable-scroll');
  };

  return (
    <div className='bg-white w-2/5 max-h-[520px] flex flex-col justify-between'>
      <Link to={`/restaurants/${id}`}>
        <div className='px-6 py-4 flex gap-4' id='cart-header'>
          <img className='h-14 w-14' src={CART_IMAGE_URL + cloudinaryImageId} />

          <div className='relative'>
            <h3 className='font-medium'>{name}</h3>
            <h4 className='text-sm'>{areaName}</h4>
            <span className='w-10 h-0.5 bg-gray-500 absolute left-0 bottom-0' />
          </div>
        </div>
      </Link>

      <div className='pt-2.5 pb-5 px-6 flex-1 overflow-auto' onScroll={handleScroll}>
        <div>
          {cartInfo.items.map((item, index) => (
            <CartItem key={index} cartItem={item} />
          ))}
        </div>

        <div
          className={`mt-6 px-5 py-3.5 flex items-center gap-3 border border-dashed border-gray-400 cursor-pointer hover:shadow-lg ${
            couponCode && 'justify-between cursor-default hover:shadow-none'
          }`}
          onClick={() => couponCode === null && openCouponDrawer()}
        >
          {couponCode ? (
            <>
              <div>
                <h4 className='text-black uppercase'>{couponCode}</h4>
                <p className='mt-px text-sm text-gray-500'>Coupon applied on the bill</p>
              </div>

              <button
                className='text-sm font-medium uppercase hover:text-orange'
                onClick={() => setCouponCode(null)}
              >
                Remove
              </button>
            </>
          ) : (
            <>
              <BiSolidOffer className='text-2xl text-gray-700' />
              <span className='text-sm'>Apply Coupon</span>
            </>
          )}
        </div>

        <div className='mt-6 text-sm flex flex-col gap-2.5'>
          <h4 className='font-medium'>Bill Details</h4>

          <div className='flex justify-between'>
            <span>Item Total</span>
            <span>₹{cartTotal}</span>
          </div>

          <div className='flex justify-between'>
            <span>Delivery Fee</span>
            <span>₹{deliveryFee}</span>
          </div>

          {couponCode && (
            <div className='flex justify-between text-lightGreen'>
              <span>Item Discount</span>
              <span>- ₹300</span>
            </div>
          )}

          <div className='flex justify-between'>
            <span>GST and Restaurant Charges</span>
            <span>₹{gstCharges}</span>
          </div>
        </div>
      </div>

      <div className='px-6 py-4 flex justify-between items-center border-t text-sm font-medium'>
        <span className='uppercase'>To Pay</span>
        <span>₹{cartTotal + deliveryFee - 300 + gstCharges}</span>
      </div>

      {openDrawer && <Backdrop closeCouponDrawer={closeCouponDrawer} />}

      <ApplyCouponDrawer
        restaurantId={id}
        setCouponCode={setCouponCode}
        setOpenCouponModal={setOpenCouponModal}
        closeCouponDrawer={closeCouponDrawer}
        openDrawer={openDrawer}
      />

      {openCouponModal && (
        <CouponAppliedModal couponCode={couponCode} setOpenCouponModal={setOpenCouponModal} />
      )}
    </div>
  );
};

export default Cart;
