import './Input.css'

const Input = ({type = 'text', label, placeHolder, valor, aoAlterado, obrigatorio = false}) => {
    return(
        <div className={`input`}>
            <label>{label}</label>
            <input
                type={type ? type : 'text'} 
                value={valor}
                onChange={(evento) => aoAlterado(evento.target.value)}
                required={obrigatorio}
                placeholder={placeHolder}
            />
        </div>
    )
}

export default Input