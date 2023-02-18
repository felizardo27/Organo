import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';


function App() {

  const [colaboradores, setColaboradores] = useState([])

  const novoColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div>
      <Banner />
      <Form colaboradorCadastrado={colaborador => novoColaborador(colaborador)}/>
    </div>
  );
}

export default App;
