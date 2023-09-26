const Backdrop = ({ closeCouponDrawer }) => {
  return (
    <div
      className='fixed top-0 left-0 w-screen h-screen bg-black/40 z-30'
      onClick={closeCouponDrawer}
    />
  );
};

export default Backdrop;
