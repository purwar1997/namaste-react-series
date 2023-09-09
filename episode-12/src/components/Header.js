import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../utils/themeSlice';
import logo from '../assets/logo.png';
import CartHoverCard from './CartHoverCard';
import EmptyCartHoverCard from './EmptyCartHoverCard';

const Header = () => {
  const [cartHover, setCartHover] = useState(false);

  // useSelector is used to read data from a redux store
  // store variable will contain state variable of every slice
  const cartItems = useSelector(store => store.cart);
  const userInfo = useSelector(store => store.user);
  const appTheme = useSelector(store => store.theme);
  const dispatch = useDispatch();

  closeCartCard = () => setCartHover(false);

  return (
    <header className='px-24 flex justify-between shadow-sm sticky top-0 bg-white z-20'>
      <div className='py-4'>
        <Link to='/'>
          <img className='w-8 hover:scale-110 transition-transform' src={logo} alt='swiggy-logo' />
        </Link>
      </div>

      <nav className='flex gap-10'>
        <NavLink
          to='/'
          className='flex items-center hover:text-orange'
          style={({ isActive }) => ({ color: isActive ? 'text-orange' : '' })}
        >
          Home
        </NavLink>

        <NavLink
          to='about'
          className='flex items-center hover:text-orange'
          style={({ isActive }) => ({ color: isActive ? 'text-orange' : '' })}
        >
          About
        </NavLink>

        <NavLink
          to='search'
          className='flex items-center hover:text-orange'
          style={({ isActive }) => ({ color: isActive ? 'text-orange' : '' })}
        >
          Search
        </NavLink>

        <NavLink
          to='grocery'
          className='flex items-center hover:text-orange'
          style={({ isActive }) => ({ color: isActive ? 'text-orange' : '' })}
        >
          Grocery
        </NavLink>

        <NavLink
          to='instamart'
          className='flex items-center hover:text-orange'
          style={({ isActive }) => ({ color: isActive ? 'text-orange' : '' })}
        >
          Instamart
        </NavLink>

        <NavLink
          to='checkout'
          className='flex items-center hover:text-orange relative'
          style={({ isActive }) => ({ color: isActive ? 'text-orange' : '' })}
          onMouseOver={() => setCartHover(true)}
          onMouseLeave={closeCartCard}
          onClick={closeCartCard}
        >
          Cart ({cartItems.reduce((totalItems, item) => totalItems + item.quantity, 0)})
          {cartHover &&
            (cartItems.length > 0 ? (
              <CartHoverCard cartItems={cartItems} closeCartCard={closeCartCard} />
            ) : (
              <EmptyCartHoverCard />
            ))}
        </NavLink>

        {userInfo.name && <li className='list-none flex items-center'>{userInfo.name}</li>}

        <li
          className='list-none capitalize cursor-pointer flex items-center'
          onClick={() => dispatch(toggleTheme())}
        >
          {appTheme} theme
        </li>
      </nav>
    </header>
  );
};

export default Header;
