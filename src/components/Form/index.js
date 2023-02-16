import './Form.css'
import Input from '../Input'

const Form = () => {
    return(
        <section className="form">
            <form>
            <h2>Preencha os dados para criar o card do colaborador.</h2>
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
            </form>
        </section>
    )
}

export default Form