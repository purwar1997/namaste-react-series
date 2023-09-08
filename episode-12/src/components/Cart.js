import useFetchRestaurantData from '../utils/useFetchRestaurantData';
import Shimmer from './Shimmer';

const Cart = ({ cartItems }) => {
  const restaurantData = useFetchRestaurantData(cartItems[0].restaurantId);

  if (restaurantData === null) {
    return <Shimmer />;
  }

  const restaurantInfo = restaurantData?.cards[0]?.card?.card?.info;

  console.log(cartItems);

  return <div>cart</div>;
};

export default Cart;
