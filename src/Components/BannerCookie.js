import { useEffect, useState } from "react"
import style from "./BannerCookie.module.css"



const getCookie = (name) => {
    
    const value = `; ${document.cookie}`
    const partes = value.split(`; ${name}=`)

    if (partes.length === 2) {
        return JSON.parse(decodeURIComponent(partes.pop().split(';').shift()))
    }
    return null
}

const setCookie = (name, value, days = 30) => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString()
    document.cookie = `${name}=${encodeURIComponent(JSON.stringify(value))}; expires=${expires}; path=/`

}



const BannerCookie = () => {
    
    const [visible, setVisible] = useState(false)
    const [mostrarOpciones, setMostrarOpciones] = useState(false)
    const [preferencia, setPreferencia] = useState({
        necessary: true,
        analytics: false,
        marketing: false
    })

    useEffect(() => {
        const consentimiento = getCookie('cookieConsent')
        if (!consentimiento) {
            setVisible(true)
            document.body.overflow = "hidden"
        }
    },[])


    const guardarPreferencias = (prefs) => {
        setCookie('cookieConsent', prefs)
        setVisible(false)
        document.body.overflow=''
    }

    const handleAcceptAll = () => {
        guardarPreferencias({ necessary: true, analytics: true, marketing: true });
    };

    const handleRejectAll = () => {
        guardarPreferencias({ necessary: true, analytics: false, marketing: false });
    };

    const handleSavePreferences = () => {
        guardarPreferencias(preferencia);
    };

    const handleChange = (e) => {
        const { name, checked } = e.target;
        setPreferencia({ ...preferencia, [name]: checked });
    };

    if (!visible) return null;

    return (
        <div className={style.cookieOverlay}>
            <div className={style.cookieBanner}>
                <h2>Consentimiento de Cookies</h2>
                <p>Usamos cookies para mejorar tu experiencia. Puedes aceptar todas, rechazar o personalizar tus preferencias.</p>

                <div className={style.cookieButtons}>
                <button className={`${style.btn} ${style.accept}`} onClick={handleAcceptAll}>Aceptar todas</button>
                <button className={`${style.btn} ${style.reject}`} onClick={handleRejectAll}>Rechazar</button>
                <button className={`${style.btn} ${style.options}`} onClick={() => setMostrarOpciones(!mostrarOpciones)}>
                    {mostrarOpciones ? 'Ocultar opciones' : 'Personalizar'}
                </button>
                </div>

                {mostrarOpciones && (
                <div className={style.cookieOptions}>
                    <label><input type="checkbox" checked disabled /> Cookies necesarias (obligatorias)</label>
                    <label><input type="checkbox" name="analytics" checked={preferencia.analytics} onChange={handleChange} /> Cookies de analítica</label>
                    <label><input type="checkbox" name="marketing" checked={preferencia.marketing} onChange={handleChange} /> Cookies de marketing</label>
                    <button className={`${style.btn} ${style.save}`} onClick={handleSavePreferences}>Guardar preferencias</button>
                </div>
                )}
            </div>
        </div>
    )
}

export default BannerCookie