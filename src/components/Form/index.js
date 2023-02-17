import './Form.css'
import Input from '../Input'
import DropDown from '../DropDown'
import Button from '../Button'

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

    const aoSalvar = (e) => {
        e.preventDefault()
        console.log("Form foi submetido")
    }

    return(
        <section className="form">
            <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card do colaborador.</h2>
            <Input 
                obrigatorio={true}
                label="Nome" 
                placeHolder="Digite o seu nome"
            /> 
            <Input 
                obrigatorio={true}
                label="Cargo" 
                placeHolder="Digite o seu Cargo"
            /> 
            <Input 
                label="Imagem" 
                placeHolder="Informe o endereço da imagem"
            /> 
            <DropDown 
                obrigatorio={true}
                label="Time"
                itens={itens}
            />
            <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default Form