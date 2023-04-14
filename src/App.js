import { useState } from 'react';
import './App.css';
import Header from './componentes/header/header';
import Formulario from './componentes/formulario/formulario';
import MiOrg from './componentes/miOrg';

function App() {
  const [mostrarFormulario,actualizarMostrar] = useState(true)
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }
/*Se pueden poner solo las llaves despues del formulario para simular algo vacion o se le puede garegar algun div, texto o lo que */ 
  return (
    <div>
      <Header></Header>
      {mostrarFormulario === true ? <Formulario /> : <></> } 
      
      <MiOrg cambiarMostrar={cambiarMostrar} />
    </div>
  );
}

export default App;
