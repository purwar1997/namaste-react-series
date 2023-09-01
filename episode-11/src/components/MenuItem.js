import { useState } from 'react';
import { MENU_ITEM_IMAGE_URL } from '../utils/constants';
import { openModal } from '../utils/helpers';
import veg from '../assets/veg.png';
import nonVeg from '../assets/non-veg.png';
import MenuItemModal from './MenuItemModal';

const MenuItem = ({ menuItem }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { name, description, price, defaultPrice, isVeg, imageId } = menuItem?.card?.info;

  const background = {
    backgroundImage: `linear-gradient(0deg, rgb(0 0 0 / 0.05), rgb(0 0 0 / 0.05)), url(${
      MENU_ITEM_IMAGE_URL + imageId
    })`,
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
        className={`w-32 rounded-lg bg-cover bg-center bg-no-repeat flex justify-center items-end  ${
          imageId ? 'h-32 cursor-pointer' : 'cursor-auto'
        }`}
        style={imageId ? background : null}
        onClick={() => imageId && openModal(setIsModalOpen)}
      >
        <button
          className={`add-item-btn ${imageId && 'relative top-3'}`}
          onClick={event => event.stopPropagation()}
        >
          Add
        </button>
      </div>

      {isModalOpen && <MenuItemModal menuItem={menuItem} setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};

export default MenuItem;
