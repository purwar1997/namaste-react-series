import { Link } from 'react-router-dom';
import { CART_HOVER_CARD_IMAGE_URL } from '../utils/constants';
import { calculateCartTotal } from '../utils/helpers';
import CartHoverCardItem from './CartHoverCardItem';

const CartHoverCard = ({ cartItems, closeCartCard }) => {
  const handleClick = event => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div
      className='absolute right-0 top-[79px] w-96 p-5 bg-white border-t-2 border-orange cursor-auto shadow-modal'
      onClick={handleClick}
    >
      <div className='flex gap-4 pb-5 border-b border-gray-300'>
        <img className='h-16 w-16' src={CART_HOVER_CARD_IMAGE_URL + 'd3to7amcs0pu8jwauayb'} />

        <div>
          <h3 className='font-medium'>Simple Burger</h3>
          <h4 className='text-sm'>Sector 51</h4>
        </div>
      </div>

      <div className='py-5 border-b border-dashed border-gray-400 space-y-4'>
        {cartItems.map((item, index) => (
          <CartHoverCardItem key={index} cartItem={item} />
        ))}
      </div>

      <div className='py-4 flex justify-between items-center text-black'>
        <span>Sub total</span>
        <span>₹{calculateCartTotal(cartItems)}</span>
      </div>

      <Link to='checkout'>
        <button
          className='w-full py-3 bg-orange text-white text-sm font-medium uppercase'
          onClick={closeCartCard}
        >
          Checkout
        </button>
      </Link>
    </div>
  );
};

export default CartHoverCard;
