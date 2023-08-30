import { useState, useEffect } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { scrollCarouselLeft, scrollCarouselRight } from '../utils/helpers';
import OfferCard from './OfferCard';

const OfferCarousel = ({ offers }) => {
  const [carousel, setCarousel] = useState(null);

  // console.log(carousel?.clientWidth, carousel?.scrollWidth);

  useEffect(() => {
    setCarousel(document.querySelector('#offer-carousel'));
  }, []);

  return (
    <div className='mt-7'>
      <div className='flex justify-between items-end'>
        <h4 className='text-xl font-semibold'>Offers for you</h4>

        {carousel?.scrollWidth > carousel?.clientWidth && (
          <div className='flex gap-3'>
            <button className='carousel-btn' onClick={() => scrollCarouselLeft(carousel)}>
              <BsArrowLeft />
            </button>

            <button className='carousel-btn' onClick={() => scrollCarouselRight(carousel)}>
              <BsArrowRight />
            </button>
          </div>
        )}
      </div>

      <div id='offer-carousel' className='mt-5 flex gap-3 overflow-x-hidden scroll-smooth'>
        {offers.map(offer => (
          <OfferCard key={offer?.info?.offerIds[0]} offer={offer} />
        ))}
      </div>
    </div>
  );
};

export default OfferCarousel;
