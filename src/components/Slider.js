import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
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
        className="item carousel-container"
        onMouseDown={(e) => (deltaX = e.pageX)}
        onMouseUp={(e) => (difference = Math.abs(e.pageX - deltaX))}
        onClick={() => (difference < swipeDelta) && handleClick(i)}
    >
      <div className='img-container'>
        <img src='../styles/icons/tettt.jpg' className='img-slider' alt='' width={200} height={200}/>
      </div>
    </div>
  ));
};

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [items] = useState(createItems(5, [setActiveIndex]));
  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  return (
    <AliceCarousel
        mouseTracking
        disableDotsControls
        disableButtonsControls
        autoPlay
        items={items}
        activeIndex={activeIndex}
        responsive={responsive}
        onSlideChanged={syncActiveIndex}
    />
  );
};

export { Carousel };