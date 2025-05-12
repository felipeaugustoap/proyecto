import logo from "./images/logo_proyecto.jpg"
import "./Components.css"
import { Route, Routes, NavLink } from "react-router-dom";


import Contacto from "../Pages/Contacto"
import Inicio from "../Pages/Inicio";
import NuestrasObras from "../Pages/NuestrasObras"
import QuienesSomos from "../Pages/QuienesSomos"
import Servicios from "../Pages/Servicios"

const Footer = () => {
    

    return (

        <>
        <footer>
            <div className="menu-topo">    
                <div className="item">
                    <NavLink to="/"><img className="logo" src={logo}/></NavLink>
                </div>
                <div className="enlaces">    
                    <div className="link">
                        <NavLink to="/">Home</NavLink>
                    </div>
                    <div className="link">
                        <NavLink to="/quienes-somos">Quienes Somos</NavLink>
                    </div>
                    <div className="link">
                        <NavLink to="/nuestras-obras">Nuestras Obras</NavLink>
                    </div>
                    <div className="link">
                        <NavLink to="/servicios">Servicios</NavLink>
                    </div>
                    <div className="link">
                        <NavLink to="/contacto">Contacto</NavLink>
                    </div>
                </div>
            </div> 
        </footer>
        </>
    )
}

export default Footer