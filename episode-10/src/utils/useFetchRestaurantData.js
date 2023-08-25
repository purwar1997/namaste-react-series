import { useState, useEffect } from 'react';
import { MENU_URL } from './constants';

const useFetchRestaurantData = restaurantId => {
  const [restaurantData, setRestaurantData] = useState(null);

  useEffect(() => {
    fetchRestaurantData();
  }, [restaurantId]);

  const fetchRestaurantData = async () => {
    try {
      const response = await fetch(MENU_URL + restaurantId);
      const json = await response.json();
      setRestaurantData(json?.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return restaurantData;
};

export default useFetchRestaurantData;
