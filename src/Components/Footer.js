import logo from "./images/logo_proyecto.jpg"
import "./Components.css"
import { Route, Routes, NavLink } from "react-router-dom";

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
        {/* <footer>
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
        </footer> */}
            
        {/* <footer class="py-5">
            <div class="row">
                <div class="col-6 col-md-2 mb-3">
                    <h5>Section</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Home</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Features</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Pricing</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0">FAQs</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0">About</a></li>
                    </ul>
                </div>
                <div class="col-6 col-md-2 mb-3">
                    <h5>Section</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Home</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Features</a></li> 
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Pricing</a></li> 
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0">FAQs</a></li> 
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0">About</a></li>
                    </ul>
                </div>
                <div class="col-6 col-md-2 mb-3">
                    <h5>Section</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Home</a></li> 
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Features</a></li> 
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Pricing</a></li> 
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0">FAQs</a></li> 
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0">About</a></li>
                    </ul>
                </div>
            </div>
            <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                <p>© 2025 Company, Inc. All rights reserved.</p>
                <ul class="list-unstyled d-flex">
                    <li class="ms-3">
                        <a class="link-body-emphasis" href="#" aria-label="Instagram">
                            <svg class="bi" width="24" height="24">
                                
                            </svg>
                        </a>
                    </li>
                    <li class="ms-3">
                        <a class="link-body-emphasis" href="#" aria-label="Facebook">
                            <svg class="bi" width="24" height="24" aria-hidden="true">
                                
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </footer> */}
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div class="footer">
                    <div class="col-md-4 d-flex align-items-center">
                        <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1" aria-label="Bootstrap">
                            <img className="logo" src={logo}/>
                        </a>
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