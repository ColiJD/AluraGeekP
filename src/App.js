import { useState } from 'react';
import './App.css';
import Header from './componentes/header/header';
import Formulario from './componentes/formulario/formulario';
import MiOrg from './componentes/miOrg';
import Equipo from './componentes/equipo';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  const equipos = [
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo: "UX y Diseño<",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }

  ]

  /*Se pueden poner solo las llaves despues del formulario para simular algo vacion o se le puede garegar algun div, texto o lo que */
  return (
    <div>
      <Header></Header>
      {mostrarFormulario === true ? <Formulario equipos={equipos.map((equipo)=> equipo.titulo)}/> : <></>}
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map((equipo) => {
          return <Equipo datos={equipo} key={equipo.titulo}/>
        })
      }
    </div>
  );
}

export default App;
