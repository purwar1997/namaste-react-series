import { useState } from 'react';
import ItemList from './ItemList';

const ItemCategory = ({ category }) => {
  const [show, setShow] = useState(false);

  const { title, itemCards } = category;

  return (
    <div>
      <div>
        <h4>
          {title} ({itemCards.length})
        </h4>

        <span onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</span>
      </div>

      {show && <ItemList menuItems={itemCards} />}
    </div>
  );
};

export default ItemCategory;
