import FormularioContacto from "../Components/FormularioContacto"
import style from './Contacto.module.css'




const Contacto = () => {
    

    

    return (
        <div className={`${style.containerPrincipal}`}>
            <div class={`${style.containerFormulario}`}>
                <FormularioContacto />
            </div>
       </div>
    )
}

export default Contacto