import './Team.css'
import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba'

const Team = ({time, colaboradores, aoDeletar, mudarCor}) => {
    return(
        (colaboradores.length > 0) ? 
        <section 
            className='team'
            style={{backgroundColor: hexToRgba(time.cor, '0.4')}}
        >
            <input 
                value={time.cor}
                onChange={evento => mudarCor(evento.target.value, time.id)}
                type='color' 
                className='input-color' 
            />
            <h3 style={{borderColor: time.cor}}>
                {time.nome}
            </h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, key) =>
                {
                return <Colaborador
                    key={key}
                    nome={colaborador.nome}
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                    corDeFundo={time.cor}
                    aoDeletar={aoDeletar}
                />
                }
                )}
            </div>
        </section> : ''
    )
}

export default Team