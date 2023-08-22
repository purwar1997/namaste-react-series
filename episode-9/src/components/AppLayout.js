import { Outlet } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import Header from './Header';

const AppLayout = () => {
  const isOnline = useOnlineStatus();

  return (
    <>
      <Header isOnline={isOnline} />
      <Outlet context={isOnline} />
    </>
  );
};

export default AppLayout;
