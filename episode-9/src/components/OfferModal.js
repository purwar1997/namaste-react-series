import { useState, useEffect } from 'react';
import { disablePageScroll, enablePageScroll } from '../utils/helpers';

const OfferModal = ({ restaurantOffer, setOpenModal }) => {
  const [showMessage, setShowMessage] = useState(false);
  const { couponCode, description, header } = restaurantOffer?.info;

  useEffect(() => {
    disablePageScroll();
  }, []);

  const closeModal = event => {
    if (event.target === event.currentTarget) {
      setOpenModal(false);
      enablePageScroll();
    }
  };

  const copyToClipboard = async couponCode => {
    await navigator.clipboard.writeText(couponCode);

    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 1000);
  };

  return (
    <div className='offer-modal-background' onClick={closeModal}>
      <div className='offer-modal'>
        <p>{couponCode}</p>
        <button onClick={() => copyToClipboard(couponCode)}>Copy</button>
        {showMessage && <div>Copied to clipboard</div>}
      </div>
    </div>
  );
};

export default OfferModal;
