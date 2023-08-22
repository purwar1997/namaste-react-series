import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import logo from '../assets/logo.png';

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const onlineStatus = useOnlineStatus();

  return (
    <header className='header'>
      <div className='logo-container'>
        <Link to='/'>
          <img className='logo' src={logo} alt='swiggy-logo' />
        </Link>
      </div>

      <div className='nav-items'>
        <NavLink to='/' className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Home
        </NavLink>

        <NavLink to='about' className={({ isActive }) => (isActive ? 'active-link' : '')}>
          About
        </NavLink>

        <NavLink to='search' className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Search
        </NavLink>

        <span className='online-status'>{onlineStatus}</span>

        <button onClick={() => setLoggedIn(!loggedIn)}>{loggedIn ? 'Logout' : 'Login'}</button>
      </div>
    </header>
  );
};

export default Header;
