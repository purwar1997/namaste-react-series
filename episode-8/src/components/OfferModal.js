// Incomplete component

const OfferModal = ({ restaurantOffer, setOpenModal }) => {
  const { couponCode, description, header } = restaurantOffer?.info;

  const closeModal = event => {
    if (event.target === event.currentTarget) {
      setOpenModal(false);
    }
  };

  return (
    <div className='offer-modal-background' onClick={closeModal}>
      <div className='offer-modal'>
        <p>{header}</p>
      </div>
    </div>
  );
};

export default OfferModal;
