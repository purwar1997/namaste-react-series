import { useState } from 'react';
import { MENU_ITEM_IMAGE_URL } from '../utils/constants';
import { openModal } from '../utils/helpers';
import veg from '../assets/veg.png';
import nonVeg from '../assets/non-veg.png';
import MenuItemModal from './MenuItemModal';

const MenuItem = ({ menuItem }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { name, description, price, defaultPrice, isVeg, imageId } = menuItem?.card?.info;

  return (
    <div className='menu-item'>
      <div className='menu-item-info'>
        <div className='menu-item-type'>
          <img src={isVeg ? veg : nonVeg} />
        </div>
        <h4 className='menu-item-name'>{name}</h4>
        <p className='menu-item-price'>₹{(price || defaultPrice) / 100}</p>
        <p className='menu-item-description'>{description}</p>
      </div>

      <div className='add-menu-item'>
        {imageId && (
          <img src={MENU_ITEM_IMAGE_URL + imageId} onClick={() => openModal(setIsModalOpen)} />
        )}
        <button className='add-item-btn'>Add</button>
      </div>

      {isModalOpen && <MenuItemModal menuItem={menuItem} setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};

export default MenuItem;
