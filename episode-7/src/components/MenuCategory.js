import { useState } from 'react';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import MenuCard from './MenuCard';
import ItemCategory from './ItemCategory';

const MenuCategory = ({ menuCategory, vegFilter }) => {
  const [show, setShow] = useState(false);
  const { title, itemCards, categories } = menuCategory?.card?.card;

  const displayedItems =
    vegFilter && itemCards ? itemCards.filter(item => item?.card?.info?.isVeg) : itemCards;

  return (
    <div className='menu-category'>
      <div className='menu-category-header'>
        <h3>
          {title} {itemCards && `(${displayedItems.length})`}
        </h3>

        {itemCards && (
          <span className='accordian-toggler' onClick={() => setShow(!show)}>
            {show ? <BsChevronUp /> : <BsChevronDown />}
          </span>
        )}
      </div>

      {itemCards ? (
        show && <MenuCard menuItems={itemCards} vegFilter={vegFilter} />
      ) : (
        <div className='item-categories'>
          {categories.map((category, index) => (
            <ItemCategory key={index} category={category} vegFilter={vegFilter} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuCategory;
