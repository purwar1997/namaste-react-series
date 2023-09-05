import { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import UserContext from '../context/UserContext';
import logo from '../assets/logo.png';

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const { user } = useContext(UserContext);

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

        <li className='list-none'>{user?.name}</li>

        <button onClick={() => setLoggedIn(!loggedIn)}>{loggedIn ? 'Logout' : 'Login'}</button>
      </nav>
    </header>
  );
};

export default Header;
