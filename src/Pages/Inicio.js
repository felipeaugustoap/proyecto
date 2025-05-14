import "./Inicio.css"
import Banner from "../Components/Banner"
import { NavLink } from "react-router-dom";



const Inicio = () => {
    


    return (
        <div className="row main">
            <Banner/>
            <div className="row">
                <p>?Necesitas un presupuesto?</p>
                <NavLink to="/contacto" className="col-2 boton">Contacta con nosotros</NavLink>
            </div>
            <div className="row">
                <h2>SOBRE NOSOTROS</h2>
                <h1>Modern House</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur provident totam doloribus pariatur reprehenderit, eos rerum ad recusandae beatae quam consequuntur porro itaque illum. Hic ea vitae voluptatem odio.</p>
                <p>Ut magnam cumque nostrum, at ea maxime cupiditate blanditiis perferendis, repudiandae, ex explicabo nulla nobis. Ut dolores vero quos praesentium eos, maiores hic modi minima repellendus in expedita tenetur repudiandae?</p>
                <NavLink to="/quienes-somos" className="col-2 boton">Saber Más</NavLink>
            </div>

            <div className="row">
                <h2>Servicios</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur provident totam doloribus pariatur reprehenderit, eos rerum ad recusandae beatae quam consequuntur porro itaque illum. Hic ea vitae voluptatem odio.</p>
                <p>Ut magnam cumque nostrum, at ea maxime cupiditate blanditiis perferendis, repudiandae, ex explicabo nulla nobis. Ut dolores vero quos praesentium eos, maiores hic modi minima repellendus in expedita tenetur repudiandae?</p>

                <NavLink to="/servicios" className="col-2 boton">Saber Más</NavLink>
            
            </div>

            <div className="row">
                <h2>Contacto</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur provident totam doloribus pariatur reprehenderit, eos rerum ad recusandae beatae quam consequuntur porro itaque illum. Hic ea vitae voluptatem odio.</p>
                <p>Ut magnam cumque nostrum, at ea maxime cupiditate blanditiis perferendis, repudiandae, ex explicabo nulla nobis. Ut dolores vero quos praesentium eos, maiores hic modi minima repellendus in expedita tenetur repudiandae?</p>

                
            </div>
        </div>
    )
}

export default Inicio