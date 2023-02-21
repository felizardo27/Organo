import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';


function App() {

  const [colaboradores, setColaboradores] = useState([])

  const novoColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div>
      <Banner />
      <Form colaboradorCadastrado={colaborador => novoColaborador(colaborador)}/>
      <Team nome='Programação'/>
      <Team nome='Front-End'/>
    </div>
  );
}

export default App;
