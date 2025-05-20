import Carousel from 'react-bootstrap/Carousel';

import style from './BannerCarousel.module.css'

import img1 from './images/casas/6.jpg'
import img2 from './images/casas/7.jpg'
import img3 from './images/casas/8.jpg'

function BannerCarousel() {
  return (
    <Carousel className={style.banner}>
      <Carousel.Item>
        <img src={img1} className={`${style.imgBanner}`} alt="..."/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2} className={`${style.imgBanner}`} alt="..."/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img3} className={`${style.imgBanner}`} alt="..."/>
      </Carousel.Item>
    </Carousel>
  );
}

export default BannerCarousel;