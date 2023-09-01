import { useState } from 'react';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import MenuCard from './MenuCard';

const ItemCategory = ({ category, vegFilter }) => {
  const [show, setShow] = useState(false);
  const { title, itemCards } = category;

  const filteredItems = vegFilter ? itemCards.filter(item => item?.card?.info?.isVeg) : itemCards;

  return (
    filteredItems.length > 0 && (
      <div className='py-4 border-b border-gray-300 last:border-none last:pb-0'>
        <div className='flex justify-between cursor-pointer' onClick={() => setShow(!show)}>
          <h3>
            {title} ({filteredItems.length})
          </h3>

          <span className='relative top-1'>{show ? <BsChevronUp /> : <BsChevronDown />}</span>
        </div>

        {show && <MenuCard menuItems={itemCards} vegFilter={vegFilter} />}
      </div>
    )
  );
};

export default ItemCategory;
