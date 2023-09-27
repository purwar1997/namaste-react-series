import veg from '../assets/veg.png';
import nonVeg from '../assets/non-veg.png';
import UpdateQuantityButton from './UpdateQuantityButton';

const CartItem = ({ cartItem }) => {
  const { menuItem, quantity } = cartItem;
  const { name, isVeg, price, defaultPrice } = menuItem;

  return (
    <div className='flex gap-4 mb-4'>
      <div className='w-2/3 flex items-start gap-2.5'>
        <img className='w-3.5 relative top-[3px]' src={isVeg ? veg : nonVeg} />
        <span className='text-sm'>{name}</span>
      </div>

      <div className='w-1/3 flex items-center justify-between gap-4'>
        <UpdateQuantityButton menuItem={menuItem} isCartItem={true} />
        <span className='text-sm'>₹{((price || defaultPrice) * quantity) / 100}</span>
      </div>
    </div>
  );
};

export default CartItem;
