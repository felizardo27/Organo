import Colaborador from '../Colaborador'
import './Team.css'

const Team = (props) => {
    
    return(
        (props.colaboradores.length > 0) ? <section 
            className='team'
            style={{backgroundColor: props.corSecundaria}}
        >
            <h3 style={{borderColor: props.corPrimaria}}>
                {props.nome}
            </h3>
            <div className='colaboradores'>
                {props.colaboradores.map((colaborador, key) =>
                <Colaborador
                    key={key}
                    nome={colaborador.nome}
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                />
                )}
            </div>
        </section> : ''
    )
}

export default Team