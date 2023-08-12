import { useState } from 'react';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import MenuCard from './MenuCard';

const ItemCategory = ({ category, vegFilter }) => {
  const [show, setShow] = useState(false);
  const { title, itemCards } = category;

  const filteredItems = vegFilter ? itemCards.filter(item => item?.card?.info?.isVeg) : itemCards;

  return (
    filteredItems.length > 0 && (
      <div className='item-category'>
        <div className='item-category-header'>
          <h4>
            {title} ({filteredItems.length})
          </h4>

          <span className='accordian-toggler' onClick={() => setShow(!show)}>
            {show ? <BsChevronUp /> : <BsChevronDown />}
          </span>
        </div>

        {show && <MenuCard menuItems={itemCards} vegFilter={vegFilter} />}
      </div>
    )
  );
};

export default ItemCategory;
