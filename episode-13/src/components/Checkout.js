import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPath } from '../utils/pathSlice';
import Cart from './Cart';
import EmptyCart from './EmptyCart';

const Checkout = () => {
  const cart = useSelector(store => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPath('/checkout'));

    return () => dispatch(setPath(window.location.pathname));
  }, []);

  return (
    <div className='px-24 py-10 bg-gray-100 flex justify-center items-center'>
      {cart.items.length > 0 ? <Cart cartInfo={cart} /> : <EmptyCart />}
    </div>
  );
};

export default Checkout;
