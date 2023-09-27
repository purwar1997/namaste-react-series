import veg from '../assets/veg.png';
import nonVeg from '../assets/non-veg.png';

const CartHoverCardItem = ({ cartItem }) => {
  const { menuItem, quantity } = cartItem;
  const { name, isVeg, price, defaultPrice } = menuItem;

  return (
    <div className='flex justify-between gap-5 text-sm'>
      <div className='w-3/4 flex items-start gap-2.5'>
        <img className='w-3.5 relative top-[3px]' src={isVeg ? veg : nonVeg} />
        <h4 className='text-black'>
          {name} x {quantity}
        </h4>
      </div>

      <span className='text-black'>₹{((price || defaultPrice) / 100) * quantity}</span>
    </div>
  );
};

export default CartHoverCardItem;
