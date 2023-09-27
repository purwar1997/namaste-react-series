import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, clearCart } from '../utils/cartSlice';
import RestaurantContext from '../context/RestaurantContext';

const ResetCartModal = ({ menuItem, closeModal }) => {
  const restaurant = useContext(RestaurantContext);
  const dispatch = useDispatch();

  const resetCart = () => {
    dispatch(clearCart());
    dispatch(addToCart({ menuItem, restaurant }));
    closeModal();
  };

  return (
    <div
      className='modal-background'
      style={{ backgroundColor: 'transparent', alignItems: 'flex-end' }}
      onClick={e => e.target === e.currentTarget && closeModal()}
    >
      <div className='bg-white w-2/5 px-8 py-7 border relative bottom-12 shadow-modal'>
        <h3 className='text-xl font-medium'>Items already in cart</h3>

        <p className='mt-2 text-sm'>
          Your cart contains items from other restaurant. Would you like to reset your cart for
          adding items from this restaurant?
        </p>

        <div className='mt-5 flex gap-4'>
          <button
            className='flex-1 bg-white text-lightGreen uppercase font-medium border-2 py-2.5 border-lightGreen'
            onClick={closeModal}
          >
            No
          </button>

          <button
            className='flex-1 bg-lightGreen text-white uppercase font-medium border-2 py-2.5 border-lightGreen'
            onClick={resetCart}
          >
            Yes, start afresh
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetCartModal;
