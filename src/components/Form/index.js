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
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

    const aoSalvar = (e) => {
        e.preventDefault()
        props.colaboradorCadastrado({
            nome,
            cargo,
            imagem, 
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    const criarTime = (e) => {
        e.preventDefault()
        props.cadastrarTime(nomeTime, corTime)
        setNomeTime('')
        setCorTime('')
    }

    return(
        <section className="form">
            <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card do colaborador.</h2>
            <Input 
                obrigatorio
                label="Nome" 
                placeHolder="Digite o seu nome"
                valor={nome}
                aoAlterado={valor => {setNome(valor)}}
            /> 
            <Input 
                obrigatorio
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
                obrigatorio
                label="Time"
                itens={props.times}
                valor={time}
                aoAlterado={valor => setTime(valor)}
            />
            <Button>Criar Card</Button>

            </form>
            <form onSubmit={criarTime}>
            <h2>Preencha os dados para criar um novo time.</h2>
            <Input 
                obrigatorio
                label="Nome" 
                placeHolder="Digite o nome do time"
                valor={nomeTime}
                aoAlterado={valor => {setNomeTime(valor)}}
            /> 
            <Input 
                obrigatorio
                label="Cor" 
                placeHolder="Digite a cor do time"
                valor={corTime}
                aoAlterado={valor => {setCorTime(valor)}}
            />  
            <Button>Criar time</Button>
            </form>
        </section>
    )
}

export default Form