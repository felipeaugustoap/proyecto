import { useEffect, useState } from "react"




const Contacto = () => {
    

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [boxText, setBoxText] = useState("")


    const cambiarNombre = (evento) => {
        const nuevoNombre = evento.target.value

        setName(nuevoNombre)
        
    }
    const cambiarTelefono = (evento) => {
        const nuevoTelefono = evento.target.value

        setPhone(nuevoTelefono)
        
    }
    const cambiarEmail = (evento) => {
        const nuevoEmail = evento.target.value

        setEmail(nuevoEmail)
        
    }

    useEffect(()=>{}, [name, phone, email, boxText])

    return (
        <div>
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
                    <textarea rows="10"></textarea>
                </div>
                <button type="button">Enviar</button>
            </form>
        </div>
    )
}

export default Contacto