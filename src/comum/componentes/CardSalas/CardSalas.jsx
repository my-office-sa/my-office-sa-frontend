import React from "react";
import "./CardSalas.css";
import BotaoCustomizado from "../BotaoCustomizado/BotaoCustomizado";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CardSalas = ({ sala }) => {
  const navigate = useNavigate();

  const chamarMaps = () => {
    if (sala.latitude && sala.longitude) {
      navigate(`/maps/${sala.latitude}/${sala.longitude}`);
    } else {
      toast.error("Localização não disponível para esta sala.");
    }
  };

  return (
    <div className="card-sala">
      <div className="imagem-sala">
        {sala.imagem && <img src={sala.imagem} alt={sala.nome} />}
      </div>
      <div className="info-sala">
        <p>
          <strong>
            {sala.bairro}, {sala.cidade}
          </strong>
        </p>
        <p>
          <strong>CEP: </strong>
          {sala.cep}
        </p>
        <p>
          <strong>Capacidade: </strong>
          {sala.capacidade} pessoas
        </p>
        <p>
          <strong>Valor: </strong>R${sala.preco}
        </p>
        <div className="btn_card">
          <BotaoCustomizado cor="primaria" aoClicar={chamarMaps}>
            Localização
          </BotaoCustomizado>
          <BotaoCustomizado
            cor="primaria"
            aoClicar={() => navigate(`/detalhes-sala/${sala.id_sala}`)}
          >
            Informações
          </BotaoCustomizado>
        </div>
      </div>
    </div>
  );
};

export default CardSalas;
