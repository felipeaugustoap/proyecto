import "./Inicio.css"
import Banner from "../Components/Banner"
import { NavLink } from "react-router-dom";
import logo from "../Components/images/logo.png"


const Inicio = () => {
    


    return (
        <div className="row main">
            <Banner/>
            <div className="presupuesto">
                <p>¿Necesitas un presupuesto?</p>
                <NavLink to="/contacto">Contacta con nosotros</NavLink>
            </div>
            <div className="row">
                <div className="col-8">
                    <h2>SOBRE NOSOTROS</h2>
                    <h1>Modern House</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur provident totam doloribus pariatur reprehenderit, eos rerum ad recusandae beatae quam consequuntur porro itaque illum. Hic ea vitae voluptatem odio.</p>
                    <p>Ut magnam cumque nostrum, at ea maxime cupiditate blanditiis perferendis, repudiandae, ex explicabo nulla nobis. Ut dolores vero quos praesentium eos, maiores hic modi minima repellendus in expedita tenetur repudiandae?</p>
                </div>
                <div className="col-3">
                    <img src={logo} className="logo-icone"/>
                </div>

                <NavLink to="/quienes-somos" className="col-2 boton-nosotros">Saber Más</NavLink>
            </div>

            <div className="row">
                <h2>Servicios</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur provident totam doloribus pariatur reprehenderit, eos rerum ad recusandae beatae quam consequuntur porro itaque illum. Hic ea vitae voluptatem odio.</p>
                <p>Ut magnam cumque nostrum, at ea maxime cupiditate blanditiis perferendis, repudiandae, ex explicabo nulla nobis. Ut dolores vero quos praesentium eos, maiores hic modi minima repellendus in expedita tenetur repudiandae?</p>

                <NavLink to="/servicios" className="col-2 boton">Saber Más</NavLink>
            
            </div>
        </div>
    )
}

export default Inicio