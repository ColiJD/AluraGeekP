
import "./miOrg.css"

const MiOrg = (props) => {
    /*const [mostrar, actualizarMostrar] = useState(true);
    const manejarClick = () => {
        actualizarMostrar(!mostrar);
    }*/

    return <section className="orgSection">
        <h3 className="title">Mi Organizacion</h3>
        <img src="./img/add.png" alt="add" onClick={props.cambiarMostrar}></img>
    </section>
}

export default MiOrg