import style from "./Servicios.module.css"




const Servicios = () => {
    const servicios = [
        {
            titulo: "Constuccion",
            descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, quo nisi. Eveniet nam libero ex illo, architecto optio cumque hic? Deleniti, explicabo doloribus quae laudantium quis laboriosam maxime possimus rem!"
        },
        {
            titulo: "Reformas",
            descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, quo nisi. Eveniet nam libero ex illo, architecto optio cumque hic? Deleniti, explicabo doloribus quae laudantium quis laboriosam maxime possimus rem!"
        },
        {
            titulo: "Escavacciones y Demoliciones",
            descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, quo nisi. Eveniet nam libero ex illo, architecto optio cumque hic? Deleniti, explicabo doloribus quae laudantium quis laboriosam maxime possimus rem!"
        },
        {
            titulo: "Manteniementos",
            descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, quo nisi. Eveniet nam libero ex illo, architecto optio cumque hic? Deleniti, explicabo doloribus quae laudantium quis laboriosam maxime possimus rem!"
        }
        
    ]


    return (
        <div class="container">
            <div className={`${style.containerPrincipal}`}>
                <p className="pagina">Hola, soy la pagina de Servicios 😀</p>
            </div>
        </div>
    )
}

export default Servicios