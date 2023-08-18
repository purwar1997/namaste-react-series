import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);

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

        <NavLink to='search' className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Search
        </NavLink>

        <button onClick={() => setLoggedIn(!loggedIn)}>{loggedIn ? 'Logout' : 'Login'}</button>
      </div>
    </header>
  );
};

export default Header;
