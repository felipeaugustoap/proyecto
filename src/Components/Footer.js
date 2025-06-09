import logo from "./images/logo_proyecto.jpg"
import "./Components.css"
import {NavLink } from "react-router-dom";

import fb from "./images/icon-fb-white.png"
import insta from "./images/icon-instagram-white.png"
import { abrirConfiguracionCookies } from "./BannerCookie";

const Footer = () => {
    

    return (

        <>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
                <div className="footer">
                    <div className="col-md-7 d-flex align-items-center justify-content-between">
                        <NavLink to="/"><img className="logo" alt="logo Modern House" src={logo} /></NavLink>
                        <span className="mb-3 mb-md-0">© 2025 Company, Inc</span>
                    </div>
                    <div>
                        <button className="buttonStyle" onClick={(e) => {
                            e.preventDefault()
                            abrirConfiguracionCookies()
                        }}>
                            Configuración de cookies
                        </button>
                    </div>
                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3">
                            <a className="text-body-secondary" href="https://www.instagram.com/" target="_blank" aria-label="Instagram" rel="noreferrer noopener">
                                <img className="icons" alt="logo Instagram" src={insta}/>
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="text-body-secondary" href="https://www.facebook.com/" target="_blank" aria-label="Facebook" rel="noreferrer noopener">
                                <img className="icons" alt="logo Facebook" src={fb}/>
                            </a>
                        </li>
                    </ul>
                </div> 
            </footer>
        </>
    )
}

export default Footer