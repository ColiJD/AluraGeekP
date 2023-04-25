import "./equipo.css"
import Colaborador from "../colaborador";

const Equipo = (prosp) => {
    //Destructuracion
    const { colorPrimario, colorSecundario, titulo } = prosp.datos;
    const { colaboradores } = prosp;

    const estiloTitulo = { borderColor: colorPrimario };

    const estilo = {
        backgroundColor: colorSecundario
    };

    /*Componentes ternarios*/
    return <>
        {colaboradores.length > 0 && //Esto es una funcio que se colaboradoes es igual a 0 no muestre los div
            <section className="equipo" style={estilo}>
                <h3 style={estiloTitulo} >{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) => <Colaborador
                            datos={colaborador}
                            key={index}
                            colorPrimario={colorPrimario}

                        />)
                    }

                </div>
            </section>
        }
    </>
}

export default Equipo;