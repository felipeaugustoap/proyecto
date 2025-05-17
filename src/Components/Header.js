import logo from "./images/logo_proyecto.jpg"
import  style from "./Header.module.css"
import { NavLink } from "react-router-dom";
import "../App.css"
import { useState } from "react";
import NavBurguer from "./Nav";

const Header = () => {

    
    

    return (

        <>
        <header>
                <div className="container-logo">
                    <NavLink to="/"><img className="logo" src={logo} /></NavLink>
                </div>
                <div className="container-contacto">
                    <NavLink to="/contacto" className={`${style.contactaNosotros}`}>¿Hablamos?</NavLink>
                </div>
        </header>
            
        <div className={`${style.menuNav}`}>
            <nav className={`${style.navMenu}`}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/quienes-somos">Quienes Somos</NavLink>
                <NavLink to="/nuestras-obras">Nuestras Obras</NavLink>
                <NavLink to="/servicios">Servicios</NavLink>
                <NavLink to="/contacto">Contacto</NavLink>
            </nav>
                <div className={`${style.burguer}`}>
                <NavBurguer />
            </div>
        </div>    
        </>
    )
}

export default Header