import { useEffect } from 'react';
import { MENU_ITEM_MODAL_IMAGE_URL } from '../utils/constants';
import { disablePageScroll, enablePageScroll } from '../utils/helpers';
import veg from '../assets/veg.png';
import nonVeg from '../assets/non-veg.png';

const MenuItemModal = ({ menuItem, setOpenModal }) => {
  const { name, description, price, defaultPrice, isVeg, imageId } = menuItem?.card?.info;

  useEffect(() => {
    disablePageScroll();
  }, []);

  const closeModal = event => {
    if (event.target === event.currentTarget) {
      setOpenModal(false);
      enablePageScroll();
    }
  };

  return (
    <div className='menu-item-modal-background' onClick={closeModal}>
      <div className='menu-item-modal'>
        <div
          className='menu-item-image'
          style={{ backgroundImage: `url(${MENU_ITEM_MODAL_IMAGE_URL + imageId})` }}
        ></div>

        <div className='menu-item-details'>
          <div>
            <img className='menu-type' src={isVeg ? veg : nonVeg} />
            <h4 className='menu-item-name'>{name}</h4>
            <p className='menu-item-price'>₹{(price || defaultPrice) / 100}</p>
          </div>

          <button className='add-item-btn'>Add</button>
        </div>

        <p className='menu-item-description'>{description}</p>
      </div>
    </div>
  );
};

export default MenuItemModal;
