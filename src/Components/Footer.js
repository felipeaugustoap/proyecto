import logo from "./images/logo_proyecto.jpg"
import "./Components.css"
import {NavLink } from "react-router-dom";

import fb from "./images/icon-fb-white.png"
import insta from "./images/icon-instagram-white.png"


const Footer = () => {
    

    return (

        <>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
                <div className="footer">
                    <div className="col-md-7 d-flex align-items-center justify-content-between">
                        <NavLink to="/"><img className="logo" src={logo} /></NavLink>
                        <span className="mb-3 mb-md-0">© 2025 Company, Inc</span>
                    </div>
                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3">
                            <a className="text-body-secondary" href="#" aria-label="Instagram">
                                <img className="icons" src={insta}/>
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="text-body-secondary" href="#" aria-label="Facebook">
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