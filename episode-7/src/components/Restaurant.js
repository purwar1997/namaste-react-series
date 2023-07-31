import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const Restaurant = () => {
  const [restaurantData, setRestaurantData] = useState(null);
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  const { restaurantId } = useParams();

  useEffect(() => {
    fetchRestaurantMenu();
  }, [restaurantId]);

  const fetchRestaurantMenu = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.57157&lng=77.381963&restaurantId=${restaurantId}&catalog_qa=undefined&submitAction=ENTER`
      );

      const json = await response.json();
      console.log(json);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <p></p>
    </div>
  );
};

export default Restaurant;
