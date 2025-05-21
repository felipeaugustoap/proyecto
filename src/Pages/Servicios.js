import style from "./Servicios.module.css"
import contruccion from "../Components/images/construccion.jpg"
import reforma from "../Components/images/reforma.jpg"
import demolicion from "../Components/images/demolicion.jpg"
import manteniemento from "../Components/images/manteniemento.jpg"



const Servicios = () => {
    const servicios = [
        {
            titulo: "Construcción",
            subtitulo:"Diseñamos y construimos tu casa a tu medida",
            descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, quo nisi. Eveniet nam libero ex illo, architecto optio cumque hic? Deleniti, explicabo doloribus quae laudantium quis laboriosam maxime possimus rem!",
            image: contruccion
        
        },
        {
            titulo: "Reformas",
            subtitulo:"Servicios a tu medida",
            descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, quo nisi. Eveniet nam libero ex illo, architecto optio cumque hic? Deleniti, explicabo doloribus quae laudantium quis laboriosam maxime possimus rem!",
            image: reforma
        },
        {
            titulo: "Escavacciones y Demoliciones",
            subtitulo:"",
            descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, quo nisi. Eveniet nam libero ex illo, architecto optio cumque hic? Deleniti, explicabo doloribus quae laudantium quis laboriosam maxime possimus rem!",
            image: demolicion
        },
        {
            titulo: "Mantenimiento Preventivo",
            subtitulo:"Cuidamos para que siempre perdure",
            descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, quo nisi. Eveniet nam libero ex illo, architecto optio cumque hic? Deleniti, explicabo doloribus quae laudantium quis laboriosam maxime possimus rem!",
            image: manteniemento
        }
        
    ]


    return (
        <div className="container">
            <div className={`${style.containerPrincipal}`}>
                {servicios.map((servicio, indice) => (
                    <div className={style.containerServicios} key={indice}>
                        <div className={style.containerText}>
                            <h2>{servicio.titulo}</h2>
                            <h3>{servicio.subtitulo}</h3>
                            <p>{servicio.descripcion}</p>
                        </div>
                        <div className={style.containerImage}>
                            <img src={servicio.image} alt="Foto Servicio"/>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Servicios