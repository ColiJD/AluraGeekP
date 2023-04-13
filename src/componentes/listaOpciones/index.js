import "./listaOpciones.css"

const ListaOpciones = () => {
    const equipos = [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño<",
        "Móvil",
        "Innovación y Gestión",
    ]
    return <div className="lista_Opciones">
        <label>Equipos</label>
        <select>
            {equipos.map( (equipo, index) => {
                return <option key={index}>{equipo}</option> /*Se pueden eliminar las llaves si es nesesario*/
            })}
        </select>
    </div>
};

export default ListaOpciones;