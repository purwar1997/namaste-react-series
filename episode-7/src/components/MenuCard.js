import MenuItem from './MenuItem';

const MenuCard = ({ menuItems, vegFilter }) => {
  const displayedMenuItems = vegFilter
    ? menuItems.filter(item => item?.card?.info?.isVeg)
    : menuItems;

  return (
    <div className='menu-card'>
      {displayedMenuItems.map(item => (
        <MenuItem key={item?.card?.info?.id} menuItem={item} />
      ))}
    </div>
  );
};

export default MenuCard;
