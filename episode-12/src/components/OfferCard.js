import { useState } from 'react';
import { DEFAULT_OFFER_LOGO_URL, CUSTOM_OFFER_LOGO_URL } from '../utils/constants';
import { openModal } from '../utils/helpers';
import OfferModal from './OfferModal';

const OfferCard = ({ offer }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { header, couponCode, description, logoBottom } = offer?.info;
  const logoUrl = logoBottom ? CUSTOM_OFFER_LOGO_URL + logoBottom : DEFAULT_OFFER_LOGO_URL;

  console.log(offer);

  return (
    <>
      <div
        className={`border rounded-lg px-3.5 py-3 min-w-[240px]  ${
          isModalOpen ? 'cursor-auto' : 'cursor-pointer'
        }`}
        onClick={() => openModal(setIsModalOpen)}
      >
        <div className='flex items-center gap-2.5'>
          <img className='w-5' src={logoUrl} />
          <h4 className='font-medium truncate'>{header}</h4>
        </div>

        <div className='mt-2 text-xs font-medium text-gray-500 flex items-center gap-1.5'>
          <span>{couponCode}</span>
          <span className='h-3 w-px bg-gray-500' />
          <span>{description}</span>
        </div>
      </div>

      {isModalOpen && <OfferModal restaurantOffer={offer} setIsModalOpen={setIsModalOpen} />}
    </>
  );
};

export default OfferCard;
