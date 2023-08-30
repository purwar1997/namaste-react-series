import { useState, useEffect } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { scrollCarouselLeft, scrollCarouselRight } from '../utils/helpers';
import TopPickCard from './TopPickCard';

const TopPicksCarousel = ({ topPicks }) => {
  const [carousel, setCarousel] = useState(null);

  useEffect(() => {
    setCarousel(document.querySelector('#top-picks-carousel'));
  }, []);

  return (
    <div className='mt-7'>
      <div className='flex justify-between items-center'>
        <h3 className='text-xl font-medium'>Top Picks</h3>

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

      <div id='top-picks-carousel' className='mt-6 flex gap-10 overflow-x-hidden scroll-smooth'>
        {topPicks.map((topPickItem, index) => (
          <TopPickCard key={index} topPick={topPickItem} />
        ))}
      </div>
    </div>
  );
};

export default TopPicksCarousel;
