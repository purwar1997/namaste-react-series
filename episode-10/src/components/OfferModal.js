import { useState } from 'react';
import { closeModal } from '../utils/helpers';

const OfferModal = ({ restaurantOffer, setIsModalOpen }) => {
  const [showMessage, setShowMessage] = useState(false);
  const { couponCode, description, header } = restaurantOffer?.info;

  const copyToClipboard = async couponCode => {
    await navigator.clipboard.writeText(couponCode);

    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 1000);
  };

  return (
    <div className='offer-modal-background' onClick={event => closeModal(event, setIsModalOpen)}>
      <div className='offer-modal'>
        <p>{couponCode}</p>
        <button onClick={() => copyToClipboard(couponCode)}>Copy</button>
        {showMessage && <div>Copied to clipboard</div>}
      </div>
    </div>
  );
};

export default OfferModal;
