import React from "react";
import "./CardSalas.css";
import BotaoCustomizado from "../BotaoCustomizado/BotaoCustomizado";
import { useNavigate } from "react-router-dom";

const CardSalas = ({ sala }) => {
  const navigate = useNavigate();

  const chamarMaps = () => {
    if (
      sala.localizacao &&
      sala.localizacao.latitude &&
      sala.localizacao.longitude
    ) {
      navigate(
        `/maps/${sala.localizacao.latitude}/${sala.localizacao.longitude}`
      );
    } else {
      toast.error("Localização não disponível para esta sala.");
    }
  };

  return (
    <div className="card-sala">
      <div className="imagem-sala">
        {sala.imagemSala && <img src={sala.imagemSala} alt={sala.nome} />}
      </div>
      <div className="info-sala">
        <p>
          <strong>
            {sala.bairro}, {sala.cidade}
          </strong>
        </p>
        <p>
          <strong>Capacidade: </strong>
          {sala.capacidadeSala} pessoas
        </p>
        <p>
          <strong>Valor: </strong>R${sala.precoSala}
        </p>
        <div className="btn_card">
          <BotaoCustomizado cor="primaria" aoClicar={chamarMaps}>
            Localização
          </BotaoCustomizado>
          <BotaoCustomizado cor="primaria">Informações</BotaoCustomizado>
        </div>
      </div>
    </div>
  );
};

export default CardSalas;
