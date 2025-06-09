import style from './NuestrasObras.module.css'
import casa6 from '../Components/images/casas/6.jpg'
import casa7 from '../Components/images/casas/7.jpg'
import casa8 from '../Components/images/casas/8.jpg'
import casa9 from '../Components/images/casas/9.jpg'
import casa10 from '../Components/images/casas/10.jpg'
import casa11 from '../Components/images/casas/11.jpg'
import casa12 from '../Components/images/casas/12.jpg'
import casa13 from '../Components/images/casas/13.jpg'
import ImageCarousel from '../Components/Carousel/ImageCarousel'


const NuestrasObras = () => {
    
    
    const obras = [
  {
    titulo: "Casa 01",
    imagenes: [casa6, casa7]
  },
  {
    titulo: "Casa 02",
    imagenes: [casa8, casa9]
  },
  {
    titulo: "Casa 03",
    imagenes: [casa10, casa11]
  },
  {
    titulo: "Casa 04",
    imagenes: [casa12, casa13]
  }
];


    return (
        <div className={`container ${style.containerPrincipal}`}>

            <h1>Nuestras Obras</h1>
            <div className={`${style.containerObras} col-10`} key={Math.round(Math.random()*10000)}>
                {obras.map((obra, indice) => (
                    <div className={style.casa} key={indice}>
                        <ImageCarousel images={obra.imagenes} className={style.imageCasa} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NuestrasObras