import './App.css';

import { Route, Routes } from "react-router-dom";
import Footer from './Components/Footer';
import Header from './Components/Header';


import Contacto from "./Pages/Contacto"
import Home from "./Pages/Home"
import NuestrasObras from "./Pages/NuestrasObras"
import QuienesSomos from "./Pages/QuienesSomos"
import Servicios from "./Pages/Servicios"



function App() {
  return (

    <>
      <Header />
      
    
      <div >
        
        <main className="container-fluid">
          
          <Routes>
              <Route path="/" element={<Home/> } />
              <Route path="/quienes-somos" element={<QuienesSomos />} />
              <Route path="/nuestras-obras" element={<NuestrasObras/>} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/contacto" element={<Contacto/>} />
          </Routes>
          
        </main> 
      </div>

      <Footer/>
    </>
  );
}

export default App;
