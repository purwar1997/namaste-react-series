import { Link } from 'react-router-dom';
import emptyCart from '../assets/empty-cart.png';

const EmptyCart = () => {
  return (
    <div className='flex flex-col items-center'>
      <img className='w-80' src={emptyCart} />
      <h2 className='-mt-3 text-2xl'>Your cart is empty</h2>
      <p className='mt-3 text-gray-600'>You can go to home page to view more restaurants</p>
      <Link
        to='/'
        className='inline-block mt-8 px-5 py-2.5 bg-orange text-white font-medium uppercase rounded hover:opacity-90'
      >
        See Restaurants
      </Link>
    </div>
  );
};

export default EmptyCart;
