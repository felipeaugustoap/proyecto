import logo from "./images/logo_proyecto.jpg"
import "./Header.css"
import { NavLink } from "react-router-dom";
import "../App.css"




const Header = () => {
    

    return (

        <>
        <nav class="navbar navbar-expand-lg d-flex">
            <div class="container-fluid menu-topo">
                <NavLink to="/"><img className="logo" src={logo} /></NavLink>
                <button class="navbar-toggler icon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg">
                        <li class="nav-item">
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/quienes-somos">Quienes Somos</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/nuestras-obras">Nuestras Obras</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/servicios">Servicios</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/contacto">Contacto</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Header