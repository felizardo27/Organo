import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Rodape from './components/Rodape';


function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const [colaboradores, setColaboradores] = useState([
    {
      nome: 'Paulo Silveira',
      cargo: 'Instrutor',
      imagem: 'https://github.com/peas.png',
      time: 'Programação'
    }, 
    {
      nome: 'Felizardo',
      cargo: 'Estudante',
      imagem: 'https://github.com/felizardo27.png',
      time: 'Front-End'
    }, 
    {
      nome: 'Vinicios Neves',
      cargo: 'Instrutor',
      imagem: 'https://github.com/viniciosneves.png',
      time: 'Front-End'
    }, 
    {
      nome: 'Felizardo',
      cargo: 'Estudante',
      imagem: 'https://github.com/felizardo27.png',
      time: 'Mobile'
    }, 
  ])

  const novoColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  const deletarColaborador = () => {
    console.log('deletando colaborador')
  }

  return (
    <div>
      <Banner />
      <Form 
        colaboradorCadastrado={colaborador => novoColaborador(colaborador)}
        times={times.map(time => time.nome)}
      />
      <section className="teams">
        <h1>Minha organização</h1>
        {times.map((time) =>
          <Team
            key={time.nome}
            nome={time.nome}
            corPrimaria={time.corPrimaria}
            corSecundaria={time.corSecundaria}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            aoDeletar={deletarColaborador}
          />
        )}
      </section>

      <Rodape />
    </div>
  );
}

export default App;
