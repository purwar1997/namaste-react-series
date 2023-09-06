import { MENU_ITEM_MODAL_IMAGE_URL } from '../utils/constants';
import { closeModal } from '../utils/helpers';
import veg from '../assets/veg.png';
import nonVeg from '../assets/non-veg.png';

const MenuItemModal = ({ menuItem, setIsModalOpen }) => {
  const { name, description, price, defaultPrice, isVeg, imageId } = menuItem;

  return (
    <div className='modal-background' onClick={event => closeModal(event, setIsModalOpen)}>
      <div className='w-[500px] bg-white rounded-xl p-4'>
        <div
          className='h-80 rounded-xl bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: `url(${MENU_ITEM_MODAL_IMAGE_URL + imageId})` }}
        />

        <div className='mt-4 flex justify-between items-start'>
          <div>
            <img className='h-4' src={isVeg ? veg : nonVeg} />
            <h4 className='mt-1 text-lg font-medium'>{name}</h4>
            <p>₹{(price || defaultPrice) / 100}</p>
          </div>

          <button className='add-item-btn'>Add</button>
        </div>

        <p className='mt-2 text-sm'>{description}</p>
      </div>
    </div>
  );
};

export default MenuItemModal;
