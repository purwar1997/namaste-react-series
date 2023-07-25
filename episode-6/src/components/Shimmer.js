const Shimmer = () => {
  return (
    <div className='shimmer-container'>
      {[...new Array(9)].map((_, index) => (
        <div key={index} className='shimmer-card'></div>
      ))}
    </div>
  );
};

export default Shimmer;
