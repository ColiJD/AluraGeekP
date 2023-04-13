import "./campoTexto.css"

const CampoTexto = (props) => {
    const placehlderModificado = `${props.placeholder}...` /*Puede ser util para modificar los props sin hacer cambios en muchos lados*/
    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input placeholder={placehlderModificado}  />
    </div>
}

export default CampoTexto;
