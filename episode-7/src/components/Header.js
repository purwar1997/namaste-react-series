import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <header className='header'>
      <div className='logo-container'>
        <img className='logo' src={logo} alt='swiggy-logo' />
      </div>

      <div className='nav-items'>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Cart</li>
        <button onClick={() => setLoggedIn(!loggedIn)}>{loggedIn ? 'Logout' : 'Login'}</button>
      </div>
    </header>
  );
};

export default Header;
