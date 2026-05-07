
function ListaHabilidades ({src, habilidad, alt}){
    return(
        <span>
            <img src={src} alt={alt ?? `Icono de ${habilidad}`}/>
        </span>
    )
}

export default ListaHabilidades;