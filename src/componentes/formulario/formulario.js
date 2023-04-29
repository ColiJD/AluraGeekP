import { useState } from "react"
import "./formulario.css"
import Campo from "../campo/campo"
import ListaOpciones from "../listaOpciones"
import Boton from "../boton"


const Formulario = (props) => {
    const [nombre, setNombre] = useState("")
    const [puesto, setPuesto] = useState("")
    const [foto, setFoto] = useState("")
    const [equipo, setEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    //Destructurar codigo
    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (evento) => {
        evento.preventDefault()
        let datosaEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosaEnviar)
    };

    const manejarNuevoequipo = (e) => {
        e.preventDefault();
        crearEquipo({titulo,colorPrimario: color})
    }
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2 >Rellena el formulario para crear el colaborador.</h2>
            <Campo titulo="Nombre" placeholder="Ingrese el nombre" required valor={nombre} setValor={setNombre} />
            <Campo titulo="Puesto" placeholder="Ingrese el puesto" required valor={puesto} setValor={setPuesto} />
            <Campo titulo="Foto" placeholder="Ingrese enlace de foto" required valor={foto} setValor={setFoto} />
            <ListaOpciones valor={equipo} setEquipo={setEquipo} equipos={props.equipos} />
            <Boton texto="Crear" />
        </form>
        <form onSubmit={manejarNuevoequipo}>
            <h2 >Rellena el formulario para crear el equipo.</h2>
            <Campo titulo="Titulo"
                placeholder="Ingresar Titulo"
                required
                valor={titulo}
                setValor={actualizarTitulo} />
            <Campo
                titulo="Color"
                placeholder="Ingrese el Color"
                required
                valor={color}
                type="color"
                setValor={actualizarColor} />
            <Boton texto="Registrar Equipo" />
        </form>
    </section>
};

export default Formulario