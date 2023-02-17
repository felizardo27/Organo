import './Input.css'

const Input = (props) => {
    
    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value)
    }
    
    return(
        <div className="input-text">
            <label>{props.label}</label>
            <input 
                value={props.valor}
                onChange={aoDigitar}
                required={props.obrigatorio}
                placeholder={props.placeHolder}
            />
        </div>
    )
}

export default Input