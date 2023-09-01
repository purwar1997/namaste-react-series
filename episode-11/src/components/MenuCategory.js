import { useState } from 'react';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import MenuCard from './MenuCard';
import ItemCategory from './ItemCategory';

const MenuCategory = ({ menuCategory, vegFilter }) => {
  const [show, setShow] = useState(false);
  const { title, itemCards, categories } = menuCategory?.card?.card;

  const filteredItems = vegFilter
    ? itemCards
      ? itemCards.filter(item => item?.card?.info?.isVeg)
      : categories.filter(
          category => category.itemCards.filter(item => item?.card?.info?.isVeg).length > 0
        )
    : itemCards || categories;

  return (
    filteredItems.length > 0 && (
      <div className='py-4 border-b border-gray-300 last:border-none'>
        <div
          className={`flex justify-between ${itemCards ? 'cursor-pointer' : 'cursor-auto'}`}
          onClick={() => itemCards && setShow(!show)}
        >
          <h3 className='text-lg font-medium'>
            {title} {itemCards && `(${filteredItems.length})`}
          </h3>

          {itemCards && (
            <span className='relative top-1'>{show ? <BsChevronUp /> : <BsChevronDown />}</span>
          )}
        </div>

        {itemCards ? (
          show && <MenuCard menuItems={itemCards} vegFilter={vegFilter} />
        ) : (
          <div className='mt-1'>
            {categories.map((category, index) => (
              <ItemCategory key={index} category={category} vegFilter={vegFilter} />
            ))}
          </div>
        )}
      </div>
    )
  );
};

export default MenuCategory;
