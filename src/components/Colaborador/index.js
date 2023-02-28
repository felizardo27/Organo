import { AiFillCloseCircle } from "react-icons/ai"
import './Colaborador.css'

const Colaborador = ({nome, imagem, cargo, corDeFundo, aoDeletar}) => {
    
    return (
        <div className='colaborador'>
            <AiFillCloseCircle size={26} onClick={aoDeletar} className='deletar'></AiFillCloseCircle>
            <div 
                className='cabecalho'
                style={{backgroundColor: corDeFundo}}
            >
                <img
                    src={imagem} 
                    alt={nome}
                />
                    
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador