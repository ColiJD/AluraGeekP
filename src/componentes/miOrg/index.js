import { useState } from "react"
import "./miOrg.css"

const MiOrg = () => {
    const [mostrar,actualizarMostrar] = useState(true);
    const manejarClick = () => {
            actualizarMostrar(!mostrar);
    }

    return <section className="orgSection">
        <h3 className="title">Mi Organizacion</h3>
        <img src="./img/add.png" alt="add" onClick={manejarClick}></img>
    </section>
}

export default MiOrg