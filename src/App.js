import './App.css';

import { Route, Routes } from "react-router-dom";
import Footer from './Components/Footer';
import Header from './Components/Header';
import Slide from './Components/Banner';


import Contacto from "./Pages/Contacto"
import Inicio from "./Pages/Inicio";
import NuestrasObras from "./Pages/NuestrasObras"
import QuienesSomos from "./Pages/QuienesSomos"
import Servicios from "./Pages/Servicios"

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <main>
            <Routes>
                <Route path="/" element={<Inicio/> } />
                <Route path="/quienes-somos" element={<QuienesSomos />} />
                <Route path="/nuestras-obras" element={<NuestrasObras/>} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/contacto" element={<Contacto/>} />
        </Routes>
        
        </main> 
      <Footer/>
    </div>
  );
}

export default App;
