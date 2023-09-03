import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import MenuCard from './MenuCard';

const ItemCategory = ({ category, vegFilter, showItems, setShowItems, setShowIndex }) => {
  const { title, itemCards } = category;
  const filteredItems = vegFilter ? itemCards.filter(item => item?.card?.info?.isVeg) : itemCards;

  const toggleAccordian = () => {
    setShowIndex();
    setShowItems(!showItems);
  };

  return (
    filteredItems.length > 0 && (
      <div className='py-4 border-b border-gray-300 last:border-none last:pb-0'>
        <div className='flex justify-between cursor-pointer' onClick={toggleAccordian}>
          <h3>
            {title} ({filteredItems.length})
          </h3>

          <span className='relative top-1'>{showItems ? <BsChevronUp /> : <BsChevronDown />}</span>
        </div>

        {showItems && <MenuCard menuItems={itemCards} vegFilter={vegFilter} />}
      </div>
    )
  );
};

export default ItemCategory;
