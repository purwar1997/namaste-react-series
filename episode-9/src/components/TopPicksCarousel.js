import { useState, useEffect } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import TopPickCard from './TopPickCard';

const TopPicksCarousel = ({ topPicks }) => {
  const [carouselBox, setCarouselBox] = useState(null);

  const showPreviousItems = () => {
    carouselBox.scrollLeft -= carouselBox.clientWidth / 2;
  };

  const showNextItems = () => {
    carouselBox.scrollLeft += carouselBox.clientWidth / 2;
  };

  useEffect(() => {
    setCarouselBox(document.querySelector('.top-pick-items'));
  }, []);

  return (
    <div className='top-picks-carousel'>
      <div className='top-picks-header'>
        <h3>Top Picks</h3>

        <div className='carousel-btns'>
          <button className='previous-btn' onClick={showPreviousItems}>
            <BsArrowLeft />
          </button>

          <button className='next-btn' onClick={showNextItems}>
            <BsArrowRight />
          </button>
        </div>
      </div>

      <div className='top-pick-items'>
        {topPicks.map((topPickItem, index) => (
          <TopPickCard key={index} topPick={topPickItem} />
        ))}
      </div>
    </div>
  );
};

export default TopPicksCarousel;
