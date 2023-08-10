import MenuItem from './MenuItem';

const ItemList = ({ menuItems }) => {
  console.log(menuItems);

  return (
    <div>
      {menuItems.map(item => (
        <MenuItem key={item?.card?.info?.id} menuItem={item}  />
      ))}
    </div>
  );
};

export default ItemList;
