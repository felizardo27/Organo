import './Input.css'

const Input = (props) => {
    return(
        <div className="input-text">
            <label>{props.label}</label>
            <input 
                value={props.valor}
                onChange={(evento) => props.aoAlterado(evento.target.value)}
                required={props.obrigatorio}
                placeholder={props.placeHolder}
            />
        </div>
    )
}

export default Input