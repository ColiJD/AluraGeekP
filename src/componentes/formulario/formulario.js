import { useState } from "react"
import "./formulario.css"
import CampoTexto from "../campoTexto/campoTexto"
import ListaOpciones from "../listaOpciones"
import Boton from "../boton"


const Formulario = (props) => {
    const [nombre, setNombre] = useState("")
    const [puesto, setPuesto] = useState("")
    const [foto, setFoto] = useState("")
    const [equipo, setEquipo] = useState("")

    //Destructurar codigo
    const {registrarColaborador} = props

    const manejarEnvio = (evento) => {
        evento.preventDefault()
        let datosaEnviar= {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosaEnviar)
    };
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2 >Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingrese el nombre" required valor={nombre} setValor={setNombre} />
            <CampoTexto titulo="Puesto" placeholder="Ingrese el puesto" required valor={puesto} setValor={setPuesto} />
            <CampoTexto titulo="Foto" placeholder="Ingrese enlace de foto" required valor={foto} setValor={setFoto} />
            <ListaOpciones valor={equipo} setEquipo={setEquipo} equipos={props.equipos}/>
            <Boton texto="Crear" />
        </form>
    </section>
};

export default Formulario