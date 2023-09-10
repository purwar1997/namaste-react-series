import { useSelector, useDispatch } from 'react-redux';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { addToCart, removeFromCart } from '../utils/cartSlice';

const UpdateQuantityButton = ({ menuItem, isCartItem }) => {
  const cart = useSelector(store => store.cart);
  const dispatch = useDispatch();

  return (
    <div
      className={`text-sm font-bold text-lightGreen px-2.5 py-2 w-20 bg-white border border-gray-200 shadow-lg rounded-md cursor-pointer flex justify-between items-center ${
        isCartItem && 'px-[6px] py-[5px] w-[70px] shadow-none rounded-none'
      }`}
      onClick={event => event.stopPropagation()}
    >
      <button className='text-emerald-700' onClick={() => dispatch(removeFromCart(menuItem.id))}>
        <AiOutlineMinus />
      </button>

      <span>{cart.items.find(item => item.menuItem.id === menuItem.id).quantity}</span>

      <button className='text-emerald-700' onClick={() => dispatch(addToCart({ menuItem }))}>
        <AiOutlinePlus />
      </button>
    </div>
  );
};

export default UpdateQuantityButton;
