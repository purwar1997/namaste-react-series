import { Outlet } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import Header from './Header';

const AppLayout = () => {
  const isOnline = useOnlineStatus();

  // navigator.clipboard
  //   .readText()
  //   .then(cliptext => console.log(cliptext))
  //   .catch(() => console.log('Rejected'));

  // navigator.clipboard.writeText('Cool Boy Shubham');

  // navigator.clipboard.readText().then(text => console.log(text));

  return (
    <>
      <Header isOnline={isOnline} />
      <Outlet context={isOnline} />
    </>
  );
};

export default AppLayout;
