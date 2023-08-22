import { useState } from 'react';

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(navigator.onLine ? 'Online' : 'Offline');

  const updateOnlineStatus = () => setOnlineStatus(navigator.onLine ? 'Online' : 'Offline');

  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);

  return onlineStatus;
};

export default useOnlineStatus;
