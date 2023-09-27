import { useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MENU_ITEM_IMAGE_URL } from '../utils/constants';
import { openModal } from '../utils/helpers';
import { addToCart } from '../utils/cartSlice';
import veg from '../assets/veg.png';
import nonVeg from '../assets/non-veg.png';
import RestaurantContext from '../context/RestaurantContext';
import MenuItemModal from './MenuItemModal';
import ResetCartModal from './ResetCartModal';
import AddItemButton from './AddItemButton';
import UpdateQuantityButton from './UpdateQuantityButton';

const MenuItem = ({ menuItem }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resetCart, setResetCart] = useState(false);
  const restaurant = useContext(RestaurantContext);

  const cart = useSelector(store => store.cart);
  const dispatch = useDispatch();

  const { name, description, price, defaultPrice, isVeg, imageId } = menuItem;

  const imageBackground = {
    backgroundImage: `linear-gradient(0deg, rgb(0 0 0 / 0.05), rgb(0 0 0 / 0.05)), url(${
      MENU_ITEM_IMAGE_URL + imageId
    })`,
  };

  const addItemToCart = event => {
    event.stopPropagation();

    const otherRestaurantItem = cart.items.length > 0 && cart.restaurant.id !== restaurant.id;

    if (otherRestaurantItem) {
      setResetCart(true);
    } else {
      dispatch(addToCart({ menuItem, restaurant }));
    }
  };

  return (
    <div
      className={`flex justify-between pt-7 pb-9 border-b border-gray-300 last:border-none ${
        imageId ? 'items-start' : 'items-center'
      }`}
    >
      <div className='w-3/4'>
        <img className='w-4' src={isVeg ? veg : nonVeg} />
        <h4 className='mt-2 font-medium'>{name}</h4>
        <p className='mt-1'>₹{(price || defaultPrice) / 100}</p>
        <p className='mt-2 text-gray-600'>{description}</p>
      </div>

      <div
        className={`w-32 rounded-lg bg-cover bg-center bg-no-repeat flex justify-center items-end ${
          imageId ? 'h-32 cursor-pointer' : 'cursor-auto'
        }`}
        style={imageId ? imageBackground : null}
        onClick={() => imageId && openModal(setIsModalOpen)}
      >
        <div className={imageId && 'relative top-3'}>
          {cart.items.find(item => item.menuItem.id === menuItem.id) ? (
            <UpdateQuantityButton menuItem={menuItem} />
          ) : (
            <AddItemButton addItemToCart={addItemToCart} />
          )}
        </div>
      </div>

      {isModalOpen && <MenuItemModal menuItem={menuItem} setIsModalOpen={setIsModalOpen} />}
      {resetCart && <ResetCartModal menuItem={menuItem} closeModal={() => setResetCart(false)} />}
    </div>
  );
};

export default MenuItem;
