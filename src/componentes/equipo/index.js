import "./equipo.css"
import Colaborador from "../colaborador";
import hexToRgba from 'hex-to-rgba';

const Equipo = (prosp) => {
    //Destructuracion
    const { colorPrimario, /*colorSecundario,*/ titulo,id } = prosp.datos;
    const { colaboradores, eliminarColaborador, actualizarColorEquipo } = prosp;

    const estiloTitulo = { borderColor: colorPrimario };

    const estilo = {
        backgroundColor:hexToRgba(colorPrimario /*colorSecundario*/,0.6) 
    };

    /*Componentes ternarios*/
    return <>
        {colaboradores.length > 0 && //Esto es una funcio que se colaboradoes es igual a 0 no muestre los div
            <section className="equipo" style={estilo}>
                <input
                    className="input-Color"
                    type="color"
                    value={colorPrimario /*colorSecundario*/}
                    onChange={(e) => {
                        actualizarColorEquipo(e.target.value,id)
                    }}
                />
                <h3 style={estiloTitulo} >{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) => <Colaborador
                            datos={colaborador}
                            key={index}
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}

                        />)
                    }

                </div>
            </section>
        }
    </>
}

export default Equipo;