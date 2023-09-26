import { useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TOP_PICK_IMAGE_URL } from '../utils/constants';
import { addToCart } from '../utils/cartSlice';
import AddItemButton from './AddItemButton';
import UpdateQuantityButton from './UpdateQuantityButton';
import RestaurantContext from '../context/RestaurantContext';
import ResetCartModal from './ResetCartModal';

const TopPickCard = ({ topPick }) => {
  const [resetCart, setResetCart] = useState(false);
  const restaurant = useContext(RestaurantContext);
  const cart = useSelector(store => store.cart);
  const dispatch = useDispatch();

  const { creativeId, fontColor } = topPick;
  const { price, defaultPrice } = topPick?.dish?.info;

  const addItemToCart = () => {
    const otherRestaurantItem = cart.items.length > 0 && cart.restaurant.id !== restaurant.id;

    if (otherRestaurantItem) {
      setResetCart(true);
    } else {
      dispatch(addToCart({ menuItem: topPick?.dish?.info, restaurant }));
    }
  };

  return (
    <div className='relative'>
      <img className='w-[350px] rounded-2xl' src={TOP_PICK_IMAGE_URL + creativeId} />

      <div className='absolute bottom-5 w-full px-6 flex justify-between items-center'>
        <span style={{ color: fontColor, fontWeight: 500 }}>₹{(price || defaultPrice) / 100}</span>

        {cart.items.find(item => item.menuItem.id === topPick?.dish?.info?.id) ? (
          <UpdateQuantityButton menuItem={topPick?.dish?.info} />
        ) : (
          <AddItemButton addItemToCart={addItemToCart} />
        )}
      </div>

      {resetCart && (
        <ResetCartModal menuItem={topPick?.dish?.info} closeModal={() => setResetCart(false)} />
      )}
    </div>
  );
};

export default TopPickCard;
