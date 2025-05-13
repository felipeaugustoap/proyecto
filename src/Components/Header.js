import logo from "./images/logo_proyecto.jpg"
import "./Components.css"
import { Route, Routes, NavLink } from "react-router-dom";
import "../App.css"


import Contacto from "../Pages/Contacto"
import Inicio from "../Pages/Inicio";
import NuestrasObras from "../Pages/NuestrasObras"
import QuienesSomos from "../Pages/QuienesSomos"
import Servicios from "../Pages/Servicios"

const Header = () => {
    

    return (

        <>
        {/* <header>
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
        </header>
        <main>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/quienes-somos" element={<QuienesSomos />} />
                <Route path="/nuestras-obras" element={<NuestrasObras/>} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/contacto" element={<Contacto/>} />
            </Routes>  
        </main> */}

        <nav class="navbar navbar-expand-lg d-flex">
            <div class="container-fluid menu-topo">
                <a class="navbar-brand" href="#"><img className="logo" src={logo}/></a>
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
        <main>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/quienes-somos" element={<QuienesSomos />} />
                <Route path="/nuestras-obras" element={<NuestrasObras/>} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/contacto" element={<Contacto/>} />
            </Routes>  
        </main>
        </>
    )
}

export default Header