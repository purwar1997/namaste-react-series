const Shimmer = () => {
  return (
    <div className='px-24 py-12 grid grid-cols-4 gap-10 justify-items-center'>
      {[...new Array(12)].map((_, index) => (
        <div key={index} className='w-64 h-44 bg-gray-200 rounded-xl'></div>
      ))}
    </div>
  );
};

export default Shimmer;
