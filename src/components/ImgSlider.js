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
        className="item"
        onMouseDown={(e) => (deltaX = e.pageX)}
        onMouseUp={(e) => (difference = Math.abs(e.pageX - deltaX))}
        onClick={() => (difference < swipeDelta) && handleClick(i)}
    >
      <div className='img-container'>
        {/* <h1 style={{color: "white"}}>TEST</h1> */}
        <img src="https:/fakeimg.pl/200x200/" alt='' className='img-slider'/>
        <img src="https:/fakeimg.pl/200x200/" alt='' className='img-slider'/>
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
        items={items}
        activeIndex={activeIndex}
        responsive={responsive}
        onSlideChanged={syncActiveIndex}
    />
  );
};

export { Carousel };