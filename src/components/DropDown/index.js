import './DropDown.css'

const DropDown = (props) => {
    return(
        <div className='drop-down'>
            <label>{props.label}</label>
            <select
                value={props.valor}
                onChange={evento => props.aoAlterado(evento.target.value)} 
                required={props.obrigatorio}
            >
                <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                } )}
            </select>
        </div>
    )
}

export default DropDown