import "./Inicio.css"
import { NavLink } from "react-router-dom";
import logo from "../Components/images/logo.png"
import BannerCarousel from "../Components/BannerCarousel";

import img8 from '../Components/images/casas/8.jpg'
import img9 from '../Components/images/casas/9.jpg'
import img10 from '../Components/images/casas/10.jpg'

const Inicio = () => {
    const ultimasObras = [
        {
            obra: img8,
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur provident totam doloribus pariatur reprehenderit."
        },
        {
            obra: img9,
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur provident totam doloribus pariatur reprehenderit."
        },
        {
            obra: img10,
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur provident totam doloribus pariatur reprehenderit."
        },

    ]


    return (
        <div className="col-10 main">
            <BannerCarousel/>
            <div className="presupuesto">
                <p>¿Necesitas un presupuesto?</p>
                <NavLink to="/contacto" className="contacta-nosotros">Contacta con nosotros</NavLink>
            </div>
            <div className="row contenido">
                <div className="col-8">
                    <h2>SOBRE NOSOTROS</h2>
                    <h1>Modern House</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur provident totam doloribus pariatur reprehenderit, eos rerum ad recusandae beatae quam consequuntur porro itaque illum. Hic ea vitae voluptatem odio.</p>
                    <p>Ut magnam cumque nostrum, at ea maxime cupiditate blanditiis perferendis, repudiandae, ex explicabo nulla nobis. Ut dolores vero quos praesentium eos, maiores hic modi minima repellendus in expedita tenetur repudiandae?</p>
                </div>
                <div className="col-4 logo-icone">
                    <img src={logo} className="img-logo-icone"/>
                </div>
                <NavLink to="/quienes-somos" className="col-2 boton">Saber Más</NavLink>
            </div>

            <div className="row contenido">
                <h2>Servicios</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur provident totam doloribus pariatur reprehenderit, eos rerum ad recusandae beatae quam consequuntur porro itaque illum. Hic ea vitae voluptatem odio.</p>
                <p>Ut magnam cumque nostrum, at ea maxime cupiditate blanditiis perferendis, repudiandae, ex explicabo nulla nobis. Ut dolores vero quos praesentium eos, maiores hic modi minima repellendus in expedita tenetur repudiandae?</p>

                <NavLink to="/servicios" className="col-2 boton">Saber Más</NavLink>
            
            </div>

            <div className="row contenido">
                <h2>Ultimas Obras</h2>
                <div className="container-obras">
                    {ultimasObras.map(obra => (
                        <div className="container-ult-obras">
                            <img src={obra.obra} className="img-ultimas-obras" />
                            <p>{obra.descripcion}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Inicio