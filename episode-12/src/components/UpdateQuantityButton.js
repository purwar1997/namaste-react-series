import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { addToCart, removeFromCart } from '../utils/cartSlice';
import RestaurantContext from '../context/RestaurantContext';

const UpdateQuantityButton = ({ menuItem, id }) => {
  const restaurantId = useContext(RestaurantContext) || id;
  const cartItems = useSelector(store => store.cart);
  const dispatch = useDispatch();

  return (
    <div
      className={`text-sm font-bold text-lightGreen px-2.5 py-2 w-20 bg-white border border-gray-200 shadow-lg rounded-md cursor-pointer flex justify-between items-center ${
        id && 'px-1.5 py-1.5 w-[70px] shadow-none rounded-none'
      }`}
      onClick={event => event.stopPropagation()}
    >
      <button className='text-emerald-700' onClick={() => dispatch(removeFromCart(menuItem.id))}>
        <AiOutlineMinus />
      </button>

      <span>{cartItems.find(item => item.menuItem.id === menuItem.id).quantity}</span>

      <button
        className='text-emerald-700'
        onClick={() => dispatch(addToCart({ menuItem, restaurantId }))}
      >
        <AiOutlinePlus />
      </button>
    </div>
  );
};

export default UpdateQuantityButton;
