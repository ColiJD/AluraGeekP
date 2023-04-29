import "./colaborador.css";
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const Colaborador = (props) => {
    const { nombre, puesto, foto, id, fav } = props.datos;
    const { colorPrimario, eliminarColaborador, link } = props
    return <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)}></AiFillCloseCircle>
        <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <AiOutlineHeart color="red" onClick={() => link(id)} /> : <AiFillHeart onClick={() => link(id)} />}



        </div>
    </div>
}

export default Colaborador;