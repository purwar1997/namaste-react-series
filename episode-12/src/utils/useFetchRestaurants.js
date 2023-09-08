import { useState, useEffect } from 'react';
import { RESTAURANTS_URL } from './constants';

const useFetchRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch(RESTAURANTS_URL);
      const json = await response.json();
      setRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (err) {
      console.log(err.message);
    }
  };

  return restaurants;
};

export default useFetchRestaurants;
