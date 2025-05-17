import { NavLink } from "react-router-dom";
import "./Nav.css"


const NavBurguer = () => {
    

    return (
        <nav className="navbar navbar-expand-lg d-flex">
            <div className="container-fluid menu-topo">
            
                <button className="navbar-toggler icon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    
                        <span className="navbar-toggler-icon"></span>

                </button>
                    

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg">
                        <li className="nav-item">
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/quienes-somos">Quienes Somos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/nuestras-obras">Nuestras Obras</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/servicios">Servicios</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contacto">Contacto</NavLink>
                        </li>
                    </ul>
                </div>
   
            </div>
        </nav>
    )
}

export default NavBurguer