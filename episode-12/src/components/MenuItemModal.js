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
  const restaurantId = useContext(RestaurantContext);
  const cartItems = useSelector(store => store.cart);
  const dispatch = useDispatch();

  const { name, description, price, defaultPrice, isVeg, imageId } = menuItem;

  const addItemToCart = () => {
    const otherRestaurantItem =
      cartItems.length > 0 && cartItems.at(-1).restaurantId !== restaurantId;

    if (otherRestaurantItem) {
      setResetCart(true);
    } else {
      dispatch(addToCart({ menuItem, restaurantId }));
    }
  };

  return (
    <div className='modal-background' onClick={event => closeModal(event, setIsModalOpen)}>
      <div className='w-[500px] bg-white rounded-xl p-4'>
        <div
          className='h-80 rounded-xl bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: `url(${MENU_ITEM_MODAL_IMAGE_URL + imageId})` }}
        />

        <div className='mt-4 flex justify-between items-start'>
          <div className='w-2/3'>
            <img className='h-4' src={isVeg ? veg : nonVeg} />
            <h4 className='mt-1 text-lg font-medium truncate'>{name}</h4>
            <p>₹{(price || defaultPrice) / 100}</p>
          </div>

          {cartItems.find(item => item.menuItem.id === menuItem.id) ? (
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
