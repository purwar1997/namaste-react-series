import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className='header'>
      <div className='logo-container'>
        <img className='logo' src={logo} alt='swiggy-logo' />
      </div>

      <div className='nav-items'>
        <li>Home</li>
        <li>About</li>
        <li>Pricing</li>
        <li>Contact Us</li>
      </div>
    </header>
  );
};

export default Header;
