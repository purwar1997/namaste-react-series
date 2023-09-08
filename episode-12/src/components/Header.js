import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../utils/themeSlice';
import logo from '../assets/logo.png';

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  // useSelector is used to read data from a redux store
  // store variable will contain state variable of every slice
  const cartItems = useSelector(store => store.cart);
  const userInfo = useSelector(store => store.user);
  const appTheme = useSelector(store => store.theme);
  const dispatch = useDispatch();

  return (
    <header className='flex justify-between items-center px-24 py-4 shadow-sm sticky top-0 bg-white z-20'>
      <div>
        <Link to='/'>
          <img className='w-8 hover:scale-110 transition-transform' src={logo} alt='swiggy-logo' />
        </Link>
      </div>

      <nav className='flex gap-10'>
        <NavLink
          to='/'
          className={`hover:text-orange ${({ isActive }) => (isActive ? 'active' : '')}`}
        >
          Home
        </NavLink>

        <NavLink
          to='about'
          className={`hover:text-orange ${({ isActive }) => (isActive ? 'active' : '')}`}
        >
          About
        </NavLink>

        <NavLink
          to='search'
          className={`hover:text-orange ${({ isActive }) => (isActive ? 'active' : '')}`}
        >
          Search
        </NavLink>

        <NavLink
          to='grocery'
          className={`hover:text-orange ${({ isActive }) => (isActive ? 'active' : '')}`}
        >
          Grocery
        </NavLink>

        <NavLink
          to='instamart'
          className={`hover:text-orange ${({ isActive }) => (isActive ? 'active' : '')}`}
        >
          Instamart
        </NavLink>

        <NavLink
          to='checkout'
          className={`hover:text-orange ${({ isActive }) => (isActive ? 'text-orange' : '')}`}
        >
          Cart ({cartItems.reduce((totalItems, item) => totalItems + item.quantity, 0)} items)
        </NavLink>

        {userInfo.name && <li className='list-none hover:text-orange'>{userInfo.name}</li>}

        <li
          className='list-none capitalize cursor-pointer hover:text-orange'
          onClick={() => dispatch(toggleTheme())}
        >
          {appTheme} theme
        </li>

        <button onClick={() => setLoggedIn(!loggedIn)}>{loggedIn ? 'Logout' : 'Login'}</button>
      </nav>
    </header>
  );
};

export default Header;
