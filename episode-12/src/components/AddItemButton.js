const AddItemButton = ({ addItemToCart }) => {
  return (
    <button className='add-item-btn' onClick={addItemToCart}>
      Add
    </button>
  );
};

export default AddItemButton;
