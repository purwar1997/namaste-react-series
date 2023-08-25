import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = ({ isOnline }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <header className='flex items-center justify-between px-24 py-5'>
      <div>
        <Link to='/'>
          <img className='w-9' src={logo} alt='swiggy-logo' />
        </Link>
      </div>

      <div className='flex gap-10'>
        {/* <li>{isOnline ? 'Online' : 'Offline'}</li> */}

        <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>

        <NavLink to='about' className={({ isActive }) => (isActive ? 'active' : '')}>
          About
        </NavLink>

        <NavLink to='search' className={({ isActive }) => (isActive ? 'active' : '')}>
          Search
        </NavLink>

        <NavLink to='grocery' className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Grocery
        </NavLink>

        <NavLink to='instamart' className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Instamart
        </NavLink>

        <button onClick={() => setLoggedIn(!loggedIn)}>{loggedIn ? 'Logout' : 'Login'}</button>
      </div>
    </header>
  );
};

export default Header;
