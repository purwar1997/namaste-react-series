import { useSelector } from 'react-redux';
import Cart from './Cart';
import EmptyCart from './EmptyCart';

const Checkout = () => {
  const cartItems = useSelector(store => store.cart);

  return (
    <div className='px-24 pt-8 pb-12 bg-gray-100 flex justify-center items-center'>
      {cartItems.length > 0 ? <Cart cartItems={cartItems} /> : <EmptyCart />}
    </div>
  );
};

export default Checkout;
