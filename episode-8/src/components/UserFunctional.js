import { useState, useEffect } from 'react';

const UserFunctional = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('https://api.github.com/users/arpitbbhayani');
        const json = await response.json();
        setUser(json);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className='user-card'>
      <img src={user.avatar_url} />
      <h4>{user.name}</h4>
      <p>{user.location}</p>
      <p>{user.twitter_username || user.blog}</p>
      <p>{user.bio}</p>
    </div>
  );
};

export default UserFunctional;
