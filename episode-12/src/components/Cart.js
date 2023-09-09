import { Link } from 'react-router-dom';
import { BiSolidOffer } from 'react-icons/bi';
import { MENU_ITEM_IMAGE_URL } from '../utils/constants';
import { calculateCartTotal } from '../utils/helpers';
import useFetchRestaurantData from '../utils/useFetchRestaurantData';
import Shimmer from './Shimmer';
import CartItem from './CartItem';

const Cart = ({ cartItems }) => {
  const { restaurantId } = cartItems[0];
  const restaurantData = useFetchRestaurantData(restaurantId);

  if (restaurantData === null) {
    return <Shimmer />;
  }

  const restaurantInfo = restaurantData?.cards[0]?.card?.card?.info;
  const { name, areaName, cloudinaryImageId } = restaurantInfo;

  const cartTotal = calculateCartTotal(cartItems);
  const deliveryFee = cartTotal > 500 ? 50 : 70;
  const gstCharges = cartTotal > 700 ? 150 : 100;

  const handleScroll = event => {
    const cartHeader = document.querySelector('.cart-header');

    if (event.target.scrollTop > 0) {
      cartHeader.classList.add('on-scroll');
    } else {
      cartHeader.classList.remove('on-scroll');
    }
  };

  return (
    <div className='bg-white w-2/5 max-h-[520px] flex flex-col justify-between'>
      <Link to={`/restaurants/${restaurantId}`}>
        <div className='cart-header px-6 py-4 flex gap-4'>
          <div
            className='w-14 h-14 bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: `url(${MENU_ITEM_IMAGE_URL + cloudinaryImageId})` }}
          />

          <div className='relative'>
            <h3 className='font-medium'>{name}</h3>
            <h4 className='text-sm'>{areaName}</h4>
            <span className='w-10 h-0.5 bg-gray-500 absolute left-0 bottom-0' />
          </div>
        </div>
      </Link>

      <div className='pt-2.5 pb-5 px-6 flex-1 overflow-auto' onScroll={handleScroll}>
        <div>
          {cartItems.map((item, index) => (
            <CartItem key={index} cartItem={item} />
          ))}
        </div>

        <div className='mt-6 p-4 flex items-center gap-4 border border-dashed border-gray-400 cursor-pointer hover:shadow-lg'>
          <BiSolidOffer className='text-2xl text-gray-700' />
          <span className='text-sm'>Apply Coupon</span>
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

          <div className='flex justify-between text-lightGreen'>
            <span>Item Discount</span>
            <span>- ₹300</span>
          </div>

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
    </div>
  );
};

export default Cart;
