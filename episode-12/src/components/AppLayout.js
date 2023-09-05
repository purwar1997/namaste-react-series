import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import useOnlineStatus from '../utils/useOnlineStatus';
import appStore from '../utils/appStore';
import Header from './Header';
import Offline from './Offline';

const AppLayout = () => {
  const isOnline = useOnlineStatus();

  return (
    <Provider store={appStore}>
      <Header />
      {isOnline ? <Outlet /> : <Offline />}
    </Provider>
  );
};

export default AppLayout;
