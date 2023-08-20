import { useEffect } from 'react';
import UserFunctional from './UserFunctional';

const AboutFunctional = () => {
  useEffect(() => {
    const intervalId = setInterval(() => console.log('Namaste React'), 1000);

    // Cleanup function runs when component is unmounted or effect dependencies are updated
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='about'>
      <h2>About Us</h2>
      <UserFunctional />
    </div>
  );
};

export default AboutFunctional;
