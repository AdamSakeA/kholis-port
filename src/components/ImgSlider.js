import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../styles/slider.scss';

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const createItems = (length, [handleClick]) => {
  let deltaX = 0;
  let difference = 0;
  const swipeDelta = 20;

  return Array.from({ length }).map((item, i) => (
      <div
          data-value={i + 1}
          className={`item img${i+1}`}
          onMouseDown={(e) => (deltaX = e.pageX)}
          onMouseUp={(e) => (difference = Math.abs(e.pageX - deltaX))}
          onClick={() => (difference < swipeDelta) && handleClick(i)}
      >
      </div>
  ));
};

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
      const [items] = useState(createItems(10, [setActiveIndex]));
  
      const slidePrev = () => setActiveIndex(activeIndex - 1);
      const slideNext = () => setActiveIndex(activeIndex + 1);
      const syncActiveIndex = ({ item }) => setActiveIndex(item);
  
      return [
          <div className="b-refs-buttons">
              <div className='arrow-left' onClick={slidePrev}></div>
              <p>Slide</p>
              <div className='arrow-right' onClick={slideNext}></div>
          </div>,
          <AliceCarousel
              mouseTracking
              disableDotsControls
              disableButtonsControls
              items={items}
              activeIndex={activeIndex}
              responsive={responsive}
              onSlideChanged={syncActiveIndex}
          />
      ];
}

export { Carousel };