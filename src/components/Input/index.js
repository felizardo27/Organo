import './Input.css'

const Input = ({type = 'text', label, placeHolder, valor, aoAlterado, obrigatorio = false}) => {
    return(
        <div className={`input ${type}`}>
            <label>{label}</label>
            <input
                type={type} 
                value={valor}
                onChange={(evento) => aoAlterado(evento.target.value)}
                required={obrigatorio}
                placeholder={placeHolder}
            />
        </div>
    )
}

export default Input