import { useSelector } from 'react-redux';
import Cart from './Cart';
import EmptyCart from './EmptyCart';

const Checkout = () => {
  const cartItems = useSelector(store => store.cart);

  return (
    <div className='px-24 py-10'>
      {cartItems.length > 0 ? <Cart cartItems={cartItems} /> : <EmptyCart />}
    </div>
  );
};

export default Checkout;
