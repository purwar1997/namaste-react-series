const AddItemButton = ({ addItemToCart }) => {
  return (
    <button
      className='text-sm font-bold text-lightGreen uppercase bg-white py-2 w-20 border border-gray-200 shadow-lg rounded-md'
      onClick={addItemToCart}
    >
      Add
    </button>
  );
};

export default AddItemButton;
