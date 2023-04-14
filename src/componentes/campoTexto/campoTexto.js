
import "./campoTexto.css"

const CampoTexto = (props) => {
    const placehlderModificado = `${props.placeholder}...` /*Puede ser util para modificar los props sin hacer cambios en muchos lados*/
    
    const manejarCambio = (e) => {
        props.setValor(e.target.value)

    }

    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input
            placeholder={placehlderModificado}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio} />
    </div>
}

export default CampoTexto;
