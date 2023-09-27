const EmptyCartHoverCard = () => {
  const handleClick = event => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div
      className={`absolute right-0 top-[79px] bg-white w-80 px-8 py-7 shadow-modal border-t-2 border-orange cursor-auto`}
      onClick={handleClick}
    >
      <h1 className='text-3xl font-semibold text-gray-500'>Cart Empty</h1>
      <p className='mt-4 text-gray-600'>
        Good food is always cooking! Go ahead, order some yummy items from the menu.
      </p>
    </div>
  );
};

export default EmptyCartHoverCard;
