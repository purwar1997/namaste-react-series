import { MENU_ITEM_IMAGE_URL } from '../utils/constants';

const MenuItem = ({ menuItem }) => {
  const { name, description, price, imageId } = menuItem?.card?.info;

  return (
    <div>
      <p>
        {name} - {price}
      </p>
      <p>{description}</p>
      <img src={MENU_ITEM_IMAGE_URL + imageId} alt={name} />
    </div>
  );
};

export default MenuItem;
