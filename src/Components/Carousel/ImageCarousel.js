import { useState } from 'react';
import "./ImageCarousel.css"

import arrowBack from "./icons/arrowBack.png"
import arrowNext from "./icons/arrowNext.png"

const ImageCarousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  const next = () => {
    setIndex((index + 1) % images.length);
  };


  return (
    <div className="carousel-container">
      <div className="carousel-image-wrapper">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Slide ${i}`}
            className={`carousel-image ${i === index ? 'active' : ''}`}
          />
        ))}
      </div>
      <button className="carousel-button prev" onClick={prev}><img src={arrowBack}/></button>
      <button className="carousel-button next" onClick={next}><img src={arrowNext}/></button>
    </div>
  );
};

export default ImageCarousel;