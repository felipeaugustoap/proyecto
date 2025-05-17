import style from './NuestrasObras.module.css'
import casa6 from '../Components/images/casas/6.jpg'
import casa7 from '../Components/images/casas/7.jpg'
import casa8 from '../Components/images/casas/8.jpg'
import casa9 from '../Components/images/casas/9.jpg'
import casa10 from '../Components/images/casas/10.jpg'
import casa11 from '../Components/images/casas/11.jpg'
import casa12 from '../Components/images/casas/12.jpg'
import casa13 from '../Components/images/casas/13.jpg'

const NuestrasObras = () => {
    const obras = [    
        {
            titulo: "Casa 01",
            image: casa6
        },
        {
            titulo: "Casa 02",
            image: casa7
        },
        {
            titulo: "Casa 03",
            image: casa8
        },
        {
            titulo: "Casa 04",
            image: casa9
        },
        {
            titulo: "Casa 05",
            image: casa10
        },
        {
            titulo: "Casa 06",
            image: casa11
        },
        {
            titulo: "Casa 07",
            image: casa12
        },
        {
            titulo: "Casa 08",
            image: casa13
        }
    ]


    return (
        <div className={`container ${style.containerPrincipal}`}>

            <h1>Nuestras Obras</h1>
            <div className={`${style.containerObras} col-10`} key={Math.round(Math.random()*10000)}>
                {obras.map((obra, indice) => (
                    <div className={style.casa} key={indice}>
                        <img src={obra.image} className={style.imageCasa} />
                    </div>
                ))}

            </div>
        </div>
    )
}

export default NuestrasObras