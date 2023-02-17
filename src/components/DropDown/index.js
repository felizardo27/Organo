import './DropDown.css'

const DropDown = (props) => {
    return(
        <div className='drop-down'>
            <label>{props.label}</label>
            <select required={props.obrigatorio}>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                } )}
            </select>
        </div>
    )
}

export default DropDown