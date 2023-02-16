import './Input.css'

const Input = () => {
    return(
        <div className="input-text">
            <label>Nome</label>
            <input 
                placeholder="Digite o seu nome"
                type="text" 
            />
        </div>
    )
}

export default Input