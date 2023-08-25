import { Outlet } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import Header from './Header';
import Offline from './Offline';

const AppLayout = () => {
  const isOnline = useOnlineStatus();

  return (
    <>
      <Header isOnline={isOnline} />
      {isOnline ? <Outlet /> : <Offline />}
    </>
  );
};

export default AppLayout;
