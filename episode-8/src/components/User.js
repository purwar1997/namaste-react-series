import { useState } from 'react';

const User = ({ name, location, contact }) => {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(1);

  return (
    <div className='user-card'>
      <h4>Name: {name}</h4>
      <p>Location: {location}</p>
      <p>Contact: {contact}</p>
      <h4>Count: {count}</h4>
      <h4>CountTwo: {countTwo}</h4>
    </div>
  );
};

export default User;
