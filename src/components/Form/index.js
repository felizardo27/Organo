import './Form.css'
import Input from '../Input'
import DropDown from '../DropDown'

const Form = () => {

    const itens = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

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
            <DropDown 
                label="Time"
                itens={itens}
            />
            </form>
        </section>
    )
}

export default Form