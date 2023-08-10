import { useState } from 'react';
import MenuCard from './MenuCard';
import ItemCategory from './ItemCategory';

const MenuCategory = ({ menuCategory }) => {
  const [show, setShow] = useState(false);
  const { title, itemCards, categories } = menuCategory?.card?.card;

  return (
    <div>
      <div>
        <h3>
          {title} {itemCards && `(${itemCards.length})`}
        </h3>

        {itemCards && <span onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</span>}
      </div>

      {itemCards ? (
        show && <MenuCard menuItems={itemCards} />
      ) : (
        <div>
          {categories.map((category, index) => (
            <ItemCategory key={index} category={category} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuCategory;
