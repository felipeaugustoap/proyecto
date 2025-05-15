import Carousel from 'react-bootstrap/Carousel';


import img1 from './images/casas/1.jpg'
import img2 from './images/casas/2.jpg'
import img3 from './images/casas/3.jpg'

function UncontrolledExample() {
  return (
    <Carousel className='banner'>
      <Carousel.Item>
        <img src={img1} class="img-banner" alt="..."/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2} class="img-banner" alt="..."/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img3} class="img-banner" alt="..."/>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;