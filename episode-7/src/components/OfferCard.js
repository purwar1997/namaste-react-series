import { DEFAULT_OFFER_LOGO_URL, CUSTOM_OFFER_LOGO_URL } from '../utils/constants';

const OfferCard = ({ offer }) => {
  const { header, couponCode, description, logoBottom } = offer?.info;
  const logoUrl = logoBottom ? CUSTOM_OFFER_LOGO_URL + logoBottom : DEFAULT_OFFER_LOGO_URL;

  return (
    <div className='restaurant-offer-card'>
      <div className='offer-card-top'>
        <img className='offer-logo' src={logoUrl} />
        <h4 className='offer-title'>{header}</h4>
      </div>

      <div className='offer-card-bottom'>
        <span>{couponCode}</span>
        <span className='offer-text-divide' />
        <span>{description}</span>
      </div>
    </div>
  );
};

export default OfferCard;
