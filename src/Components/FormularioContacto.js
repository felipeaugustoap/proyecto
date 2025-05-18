import { useEffect, useState } from "react"
import style from './FormularioContacto.module.css'





const FormularioContacto = () => {
 const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [boxText, setBoxText] = useState("")
    const [btnDesabilitado, setBtnDesabilitado] = useState(true)


    const cambiarNombre = (evento) => { setName(evento.target.value) }
    const cambiarTelefono = (evento) => { setPhone(evento.target.value) }
    const cambiarEmail = (evento) => { setEmail(evento.target.value) }
    const cambiarBoxText = (evento) => { setBoxText(evento.target.value) }
    

    const validarNombre = (name) => {
        return name && name.length > 3
    }

    const validarTelefono = (phone) => {
        const phoneRegex = /^(0034|\+34)?(\d{3})[- ]?(\d{2})[- ]?(\d)[- ]?(\d)[- ]?(\d{2})$/
        return phoneRegex.test(phone)
    }

    const validarEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email)
    }

    const validarCajaTexto = (boxText) => {
        return boxText && boxText.length > 10  
    }


    useEffect(() => {
        const validacion = validarNombre(name) && validarEmail(email) && validarTelefono(phone) && validarCajaTexto(boxText)
        setBtnDesabilitado(!validacion)
    }, [name, email, phone, boxText])

    return  <div className={`${style.containerPrincipal}`}>
            <form action="">
                <div>
                    <input type="text" value={name} placeholder="Nombre" onChange={cambiarNombre}/>

                </div>
                <div>
                    <input type="tel" value={phone} placeholder="Telefono" onChange={cambiarTelefono}/>
                </div>
                <div>
                    <input type="text" value={email} placeholder="email" onChange={cambiarEmail}/>
                </div>
                <div>
                    <textarea rows="10" value={boxText} placeholder="Escriba su mensaje" onChange={cambiarBoxText}></textarea>
                </div>
                <button type="button" disabled={btnDesabilitado}>Enviar</button>
            </form>
        </div>
}

export default FormularioContacto