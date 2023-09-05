import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import Header from './Header';
import Offline from './Offline';
import UserContext from '../context/UserContext';

const AppLayout = () => {
  const [user, setUser] = useState(null);
  const isOnline = useOnlineStatus();

  useEffect(() => {
    //  Make an API call to database to authenticate user
    const data = {
      name: 'Shubham',
    };

    setUser(data);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Header />
      {isOnline ? <Outlet /> : <Offline />}
    </UserContext.Provider>
  );
};

export default AppLayout;
