import { useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MENU_ITEM_MODAL_IMAGE_URL } from '../utils/constants';
import { closeModal } from '../utils/helpers';
import { addToCart } from '../utils/cartSlice';
import veg from '../assets/veg.png';
import nonVeg from '../assets/non-veg.png';
import AddItemButton from './AddItemButton';
import UpdateQuantityButton from './UpdateQuantityButton';
import RestaurantContext from '../context/RestaurantContext';
import ResetCartModal from './ResetCartModal';

const MenuItemModal = ({ menuItem, setIsModalOpen }) => {
  const [resetCart, setResetCart] = useState(false);
  const restaurant = useContext(RestaurantContext);
  const cart = useSelector(store => store.cart);
  const dispatch = useDispatch();

  const { name, description, price, defaultPrice, isVeg, imageId } = menuItem;

  const addItemToCart = () => {
    const otherRestaurantItem = cart.items.length > 0 && cart.restaurant.id !== restaurant.id;

    if (otherRestaurantItem) {
      setResetCart(true);
    } else {
      dispatch(addToCart({ menuItem, restaurant }));
    }
  };

  return (
    <div className='modal-background' onClick={event => closeModal(event, setIsModalOpen)}>
      <div className='w-[500px] bg-white rounded-xl p-4'>
        <img
          className='w-full h-80 rounded-xl object-cover object-center'
          src={MENU_ITEM_MODAL_IMAGE_URL + imageId}
        />

        <div className='mt-4 flex justify-between items-start'>
          <div className='w-2/3'>
            <img className='h-4' src={isVeg ? veg : nonVeg} />
            <h4 className='mt-1 text-lg font-medium truncate'>{name}</h4>
            <p>₹{(price || defaultPrice) / 100}</p>
          </div>

          {cart.items.find(item => item.menuItem.id === menuItem.id) ? (
            <UpdateQuantityButton menuItem={menuItem} />
          ) : (
            <AddItemButton addItemToCart={addItemToCart} />
          )}
        </div>

        <p className='mt-2 text-sm'>{description}</p>
      </div>

      {resetCart && <ResetCartModal menuItem={menuItem} closeModal={() => setResetCart(false)} />}
    </div>
  );
};

export default MenuItemModal;
