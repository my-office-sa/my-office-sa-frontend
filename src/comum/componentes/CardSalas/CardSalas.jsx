import { FaRegStar } from "react-icons/fa6";
import './CardSalas.css';

const CardSalas = () => {

    return (
        <div className="card_salas">
            <img src="sala.svg" alt="Sala" />
            <div className="bairro_nota">
                <span>Santa Mônica, Florianópolis</span>
                <div>
                    <FaRegStar /> 4.9
                </div>
            </div>
            <div className="dados_sala">
                <span>Capacidade: 250</span>
                <span>Valor: R$250</span>
            </div>
        </div>
    );
}

export default CardSalas;
