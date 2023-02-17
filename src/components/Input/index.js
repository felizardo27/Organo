import './Input.css'

const Input = (props) => {
    return(
        <div className="input-text">
            <label>{props.label}</label>
            <input 
                required={props.obrigatorio}
                placeholder={props.placeHolder}
            />
        </div>
    )
}

export default Input