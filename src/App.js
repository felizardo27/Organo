import Banner from './components/Banner';
import Input from './components/Input';

function App() {
  return (
    <div>
      <Banner />
      <Input 
        label="Nome" 
        placeHolder="Digite o seu nome"
      /> 

      <Input 
        label="Cargo" 
        placeHolder="Digite o seu Cargo"
      /> 

      <Input 
        label="Imagem" 
        placeHolder="Informe o endereço da imagem"
      /> 
    </div>
  );
}

export default App;
