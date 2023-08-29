import { useState, useEffect } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import OfferCard from './OfferCard';

const OfferCarousel = ({ offers }) => {
  const [carouselBox, setCarouselBox] = useState(null);

  const showPreviousItems = () => {
    carouselBox.scrollLeft -= carouselBox.clientWidth / 2;
  };

  const showNextItems = () => {
    carouselBox.scrollLeft += carouselBox.clientWidth / 2;
  };

  useEffect(() => {
    setCarouselBox(document.querySelector('.carousel-box'));
  }, []);

  return (
    <div className='mt-5'>
      <div className='flex justify-between items-end'>
        <h4 className='text-xl font-semibold'>Offers for you</h4>

        <div className='flex gap-3'>
          <button className='carousel-btn' onClick={showPreviousItems}>
            <BsArrowLeft className='carousel-btn-icon' />
          </button>

          <button className='carousel-btn' onClick={showNextItems}>
            <BsArrowRight className='carousel-btn-icon' />
          </button>
        </div>
      </div>

      <div className='carousel-box mt-6'>
        {offers.map(offer => (
          <OfferCard key={offer?.info?.offerIds[0]} offer={offer} />
        ))}
      </div>
    </div>
  );
};

export default OfferCarousel;
