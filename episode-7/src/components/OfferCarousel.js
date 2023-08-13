import { useState, useEffect } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import OfferCard from './OfferCard';

const OfferCarousel = ({ offers }) => {
  const [carouselBox, setCarouselBox] = useState(null);
  console.log(carouselBox);

  const showPreviousItems = () => {
    carouselBox.scrollLeft -= carouselBox.clientWidth / 2;
  };

  const showNextItems = () => {
    carouselBox.scrollLeft += carouselBox.clientWidth / 2;
  };

  useEffect(() => {
    setCarouselBox(document.querySelector('.restaurant-offers'));
  }, []);

  return (
    <div className='offer-carousel'>
      <div className='offer-carousel-header'>
        <h4>Offers for you</h4>

        <div className='carousel-btns'>
          <button className='previous-btn' onClick={showPreviousItems}>
            <BsArrowLeft />
          </button>

          <button className='next-btn' onClick={showNextItems}>
            <BsArrowRight />
          </button>
        </div>
      </div>

      <div className='restaurant-offers'>
        {offers.map(offer => (
          <OfferCard key={offer?.info?.offerIds[0]} offer={offer} />
        ))}
      </div>
    </div>
  );
};

export default OfferCarousel;
