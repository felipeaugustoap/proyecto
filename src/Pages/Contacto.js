import FormularioContacto from "../Components/FormularioContacto"
import Mapa from "../Components/Mapa"
import style from './Contacto.module.css'




const Contacto = () => {
    

    

    return (
        <div className={`${style.containerPrincipal} row`}>

            <div className={`${style.containerDatos}`}>
                <div className={`${style.contacto}`}>
                    <h2>¿Hablemos de tu casa?</h2>
                    <address>
                        <strong>Oficina Central</strong><br />
                        Calle Educación, 6, 15011 A Coruña<br />
                        España<br />
                        Tel: <a href="tel:+34999999999" id="telefono" className={style.telefono}> Telefono: 999 999 999</a><br />
                        E-mail: <a href="malito:modern.house.construccion@gmail.com" id="mail" className={style.mail}>📧modern.house.construccion@gmail.com</a>
                    </address>
                </div>
                <div className={style.containerMapa}>
                    <Mapa/>
                </div>
            </div>








            <div class={`${style.containerFormulario}`}>
                <FormularioContacto />
            </div>
       </div>
    )
}

export default Contacto