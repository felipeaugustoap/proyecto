import FormularioContacto from "../Components/FormularioContacto"
import Mapa from "../Components/Mapa"
import style from './Contacto.module.css'




const Contacto = () => {
    

    

    return (
        <div className={`${style.containerPrincipal} row`}>

            <div className={`${style.containerDatos}`}>
                <h2>Hablemos de tu casa</h2>
                <h3>Telefono: 999 999 999</h3>
                <p>
                    Direccion:
                    Calle Educacion, 5
                    15011 A Coruña
                    Galicia
                </p>
                <div className={style.containerMapa}>
                    <Mapa />
                </div>
            </div>








            <div class={`${style.containerFormulario}`}>
                <FormularioContacto />
            </div>
       </div>
    )
}

export default Contacto