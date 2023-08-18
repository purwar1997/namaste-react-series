import { useState } from 'react';
import { DEFAULT_OFFER_LOGO_URL, CUSTOM_OFFER_LOGO_URL } from '../utils/constants';
import OfferModal from './OfferModal';

const OfferCard = ({ offer }) => {
  const [openModal, setOpenModal] = useState(false);

  const { header, couponCode, description, logoBottom } = offer?.info;
  const logoUrl = logoBottom ? CUSTOM_OFFER_LOGO_URL + logoBottom : DEFAULT_OFFER_LOGO_URL;

  return (
    <div className='restaurant-offer-card' onClick={() => setOpenModal(true)}>
      <div className='offer-card-top'>
        <img className='offer-logo' src={logoUrl} />
        <h4 className='offer-title'>{header}</h4>
      </div>

      <div className='offer-card-bottom'>
        <span>{couponCode}</span>
        <span className='offer-text-divide' />
        <span>{description}</span>
      </div>

      {openModal && <OfferModal restaurantOffer={offer} setOpenModal={setOpenModal} />}
    </div>
  );
};

export default OfferCard;
