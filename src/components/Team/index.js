import Colaborador from '../Colaborador'
import './Team.css'

const Team = (props) => {
    
    return(
        <section 
            className='team'
            style={{backgroundColor: props.corSecundaria}}
        >
            <h3 style={{borderColor: props.corPrimaria}}>
                {props.nome}
            </h3>
            <Colaborador />
        </section>
    )
}

export default Team