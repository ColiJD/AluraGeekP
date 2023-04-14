
import "./listaOpciones.css"

const ListaOpciones = (props) => {
    const equipos = [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño<",
        "Móvil",
        "Innovación y Gestión",
    ]

    const manejarCambio = (e) => {
        props.setEquipo(e.target.value)
    }
    return <div className="lista_Opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden >Seleccionar Equipo</option>
            {equipos.map((equipo, index) => {
                return <option key={index} value={equipo} >{equipo}</option> /*Se pueden eliminar las llaves si es nesesario*/
            })}
        </select>
    </div>
};

export default ListaOpciones;