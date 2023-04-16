import "./equipo.css"
import Colaborador from "../colaborador";

const Equipo = (prosp) => {
    //Destructuracion
    const { colorPrimario, colorSecundario, titulo } = prosp.datos;

    const estiloTitulo = { borderColor: colorPrimario };

    const estilo = {
        backgroundColor: colorSecundario
    };


    return <section className="equipo" style={estilo}>
        <h3 style={estiloTitulo} >{titulo}</h3>
        <div className="colaboradores">
            <Colaborador />
            <Colaborador />
            <Colaborador />
            <Colaborador />
        </div>
    </section>
}

export default Equipo;