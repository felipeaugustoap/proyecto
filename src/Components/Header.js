import logo from "./images/logo_proyecto.jpg"
import  style from "./Header.module.css"
import { NavLink } from "react-router-dom";
import "../App.css"
import NavBurguer from "./Nav";

const Header = () => {

    
    

    return (

        <>
        <header>
            <div className={`${style.topo} container`}>
                <div className="container-logo">
                    <NavLink to="/"><img className="logo" alt="logo Modern House" src={logo} /></NavLink>
                </div>
                <div className="container-contacto">
                    <NavLink to="/contacto" className={`${style.contactaNosotros} ${style.link}`}>¿Hablamos?</NavLink>
                </div>
            </div>
            <div className={`${style.menuNav}`}>
                <nav className={`${style.navMenu}`}>
                    <NavLink className={style.link} to="/">Home</NavLink>
                    <NavLink className={style.link} to="/quienes-somos">Quienes Somos</NavLink>
                    <NavLink className={style.link} to="/nuestras-obras">Nuestras Obras</NavLink>
                    <NavLink className={style.link} to="/servicios">Servicios</NavLink>
                    <NavLink className={style.link} to="/contacto">Contacto</NavLink>
                </nav>
            </div>    
        </header>
            
        <div className={`${style.burguer}`}>
            <NavBurguer />
        </div>
        </>
    )
}

export default Header