import React from 'react';
import './CardSalas.css'; 

const CardSalas = ({ sala }) => {
  return (
    <div className="card-sala">
      <div className="imagem-sala">
        {sala.imagemSala && <img src={sala.imagemSala} alt={sala.nome} />}
      </div>
      <div className="info-sala">
        <p><strong>{sala.bairro}, {sala.cidade}</strong></p>
        <p><strong>Capacidade: </strong>{sala.capacidadeSala} pessoas</p>
        <p><strong>Valor: </strong>R${sala.precoSala}</p>
      </div>

    </div>
  );
};

export default CardSalas;
