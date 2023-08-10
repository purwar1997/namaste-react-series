import { useState } from 'react';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import MenuCard from './MenuCard';
import ItemCategory from './ItemCategory';

const MenuCategory = ({ menuCategory }) => {
  const [show, setShow] = useState(false);
  const { title, itemCards, categories } = menuCategory?.card?.card;

  return (
    <div className='menu-category'>
      <div className='menu-category-header'>
        <h3>
          {title} {itemCards && `(${itemCards.length})`}
        </h3>

        {itemCards && (
          <span className='accordian-toggler' onClick={() => setShow(!show)}>
            {show ? <BsChevronUp /> : <BsChevronDown />}
          </span>
        )}
      </div>

      {itemCards ? (
        show && <MenuCard menuItems={itemCards} />
      ) : (
        <div className='item-categories'>
          {categories.map((category, index) => (
            <ItemCategory key={index} category={category} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuCategory;
