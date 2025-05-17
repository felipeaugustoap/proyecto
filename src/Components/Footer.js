import logo from "./images/logo_proyecto.jpg"
import "./Components.css"
import {NavLink } from "react-router-dom";

import fb from "./images/icon-fb-white.png"
import insta from "./images/icon-instagram-white.png"


import Contacto from "../Pages/Contacto"
import Inicio from "../Pages/Inicio";
import NuestrasObras from "../Pages/NuestrasObras"
import QuienesSomos from "../Pages/QuienesSomos"
import Servicios from "../Pages/Servicios"

const Footer = () => {
    

    return (

        <>
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
                <div class="footer">
                    <div class="col-md-7 d-flex align-items-center justify-content-between">
                        <NavLink to="/"><img className="logo" src={logo} /></NavLink>
                        <span class="mb-3 mb-md-0">© 2025 Company, Inc</span>
                    </div>
                    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li class="ms-3">
                            <a class="text-body-secondary" href="#" aria-label="Instagram">
                                <img className="icons" src={insta}/>
                            </a>
                        </li>
                        <li class="ms-3">
                            <a class="text-body-secondary" href="#" aria-label="Facebook">
                                <img className="icons" src={fb}/>
                            </a>
                        </li>
                    </ul>
                </div> 
            </footer>
        </>
    )
}

export default Footer