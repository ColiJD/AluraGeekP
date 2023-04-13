import "./formulario.css"
import CampoTexto from "../campoTexto/campoTexto"
import ListaOpciones from "../listaOpciones"
import Boton from "../boton"

const Formulario = () => {
    const manejarEnvio = (evento) => {
        evento.preventDefault()
    };
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2 >Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingrese el nombre" required />
            <CampoTexto titulo="Puesto" placeholder="Ingrese el puesto" required/>
            <CampoTexto titulo="Foto" placeholder="Ingrese enlace de foto" required/>
            <ListaOpciones />
            <Boton texto="Crear" />
        </form>
    </section>
};

export default Formulario