import Carousel from 'react-bootstrap/Carousel';

import style from './BannerCarousel.module.css'

import img1 from './images/casas/6.jpg'
import img2 from './images/casas/7.jpg'
import img3 from './images/casas/8.jpg'

function BannerCarouselItem ({images}) {

  return (
    <Carousel className={style.banner}>
      {images.map((src, index) => {
        <Carousel.Item key={index}>
          <img src={src} className={`${style.imgBanner}`} alt="..."/>
        </Carousel.Item>
      })}
    </Carousel>
  );
}

export default BannerCarouselItem;