import style from "./QuienesSomos.module.css"
import imgOficina from "../Components/images/escritorio.jpg" 
import mapaEspaña from "../Components/images/espana.png"

import iconeTrabajador from "../Components/icons/construction.png"
import iconeExperiencia from "../Components/icons/calendar.png"
import iconeCalidad from "../Components/icons/calidad.png"
import iconePuntualidad from "../Components/icons/time_12170554.png"


const QuienesSomos = () => {
    
    let calidades = [
        {
            icone: iconeTrabajador,
            descripcion: "Profesionales con Experiencia"
        },
        {
            icone: iconeExperiencia,
            descripcion: "+ de 15 años de experiencia"
        },
        {
            icone: iconeCalidad,
            descripcion: "Calidad de servicio asegurada"
        },
        {
            icone: iconePuntualidad,
            descripcion: "Puntuales y rigorosos"
        },
    ]


    return (
        <div className="container">
            <div className={style.fundo}>
                <div className={style.conocenos}>
                    <div className="row">
                        <h1 className={style.titulo}>Conócenos</h1>
                    </div>
                    <div className={style.row}>
                        <div className={`${style.containerParrafo}`}>
                            <p className={`${style.parrafo}`}>Pellentesque eget commodo neque, pellentesque placerat dolor. Quisque sit amet eros lectus. Nulla facilisi. Nulla volutpat purus et auctor eleifend. Nunc rutrum mollis interdum. Quisque risus lorem, porttitor nec risus sit amet, bibendum ullamcorper ante. Nunc accumsan faucibus ante, a tincidunt neque. Aenean mattis fermentum massa, sit amet pellentesque lorem aliquam vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec leo elit. Vivamus volutpat, felis a egestas eleifend, mauris urna eleifend neque, et faucibus nulla nisl et erat. Maecenas varius imperdiet justo, id lacinia felis consectetur id. Vivamus ut augue at lorem ultricies tincidunt.</p>
                        </div>

                        <div className={`${style.containerOficina}`}>
                            <img src={imgOficina} alt="Foto Oficina" className={`${style.imageOficina}`} />
                        </div>
                    </div>
                </div>
                <div className={`${style.row} ${style.rowIcone}`}>
                    {calidades.map((calidad, indice) => (
                        <div className={style.containerIcon} key={indice}>
                            <img src={calidad.icone} alt="Icone" className={style.icone} />
                            <p>{calidad.descripcion}</p>
                        </div>
                    ))}

                </div>
                <div className={`${style.row}`}>
                    <div className={`${style.containerMapa} col-5`}>
                        <img src={mapaEspaña} alt="Mapa" className={style.mapa}/>
                    </div>
                    <div className={`${style.containerActuacion}`}>
                        <p className={style.parrafo}>Nos encontramos en todo territorio Español.</p>
                        <p className={style.parrafo}>Nuestro objetivo es garantizar y mantener como denominador común los altos estándares de fiabilidad que nos caracterizan, así como un riguroso cumplimiento de plazos y presupuestos pactados. Nos avala el trabajo bien hecho.</p>
                    </div>
                </div>
                
            </div>

            





        </div>
    )
}

export default QuienesSomos