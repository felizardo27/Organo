import './Form.css'
import Input from '../Input'
import DropDown from '../DropDown'
import Button from '../Button'
import { useState } from 'react'

const Form = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (e) => {
        e.preventDefault()
        props.colaboradorCadastrado({
            nome,
            cargo,
            imagem, 
            time
        })
    }

    return(
        <section className="form">
            <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card do colaborador.</h2>
            <Input 
                obrigatorio={true}
                label="Nome" 
                placeHolder="Digite o seu nome"
                valor={nome}
                aoAlterado={valor => {setNome(valor)}}
            /> 
            <Input 
                obrigatorio={true}
                label="Cargo" 
                placeHolder="Digite o seu Cargo"
                valor={cargo}
                aoAlterado={valor => {setCargo(valor)}}
            /> 
            <Input 
                label="Imagem" 
                placeHolder="Informe o endereço da imagem"
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
            /> 
            <DropDown 
                obrigatorio={true}
                label="Time"
                itens={props.times}
                valor={time}
                aoAlterado={valor => setTime(valor)}
            />
            <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default Form