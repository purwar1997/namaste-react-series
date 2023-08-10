import { useState } from 'react';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import MenuCard from './MenuCard';

const ItemCategory = ({ category }) => {
  const [show, setShow] = useState(false);
  const { title, itemCards } = category;

  return (
    <div className='item-category'>
      <div className='item-category-header'>
        <h4>
          {title} ({itemCards.length})
        </h4>

        <span className='accordian-toggler' onClick={() => setShow(!show)}>
          {show ? <BsChevronUp /> : <BsChevronDown />}
        </span>
      </div>

      {show && <MenuCard menuItems={itemCards} />}
    </div>
  );
};

export default ItemCategory;
