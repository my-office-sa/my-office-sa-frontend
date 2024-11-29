import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Principal from "../../comum/componentes/Principal/Principal";
import ServicosSalas from "../../comum/servicos/ServicosSalas";
import "./PaginaDetalhesSala.css";

const instanciaServicoSalas = new ServicosSalas();

const PaginaDetalhesSala = () => {
  const { idSala } = useParams();
  const [sala, setSala] = useState(null);
  const [imagemAmpliada, setImagemAmpliada] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const salasDoLocalStorage = instanciaServicoSalas.listar();
    const salaEncontrada = salasDoLocalStorage.find(
      (sala) => sala.id === Number(idSala)
    );

    if (salaEncontrada) {
      setSala(salaEncontrada);
    } else {
      navigate("/");
    }
  }, [idSala, navigate]);

  const toggleImagem = () => {
    setImagemAmpliada(!imagemAmpliada);
  };

  return (
    <Principal titulo="Detalhes da Sala" voltarPara="/">
      {sala ? (
        <div className="detalhes-sala">
          <div className="detalhes-imagem">
            {sala.imagemSala && (
              <img
                src={sala.imagemSala}
                alt={sala.nome}
                className={`imagem-detalhe-sala ${
                  imagemAmpliada ? "ampliada" : ""
                }`}
                onClick={toggleImagem}
              />
            )}
          </div>
          <div className="detalhes-info">
            <h2>{sala.nome}</h2>
            <p>
              <strong>ID:</strong> {sala.id}
            </p>
            <p>
              <strong>Descrição:</strong> {sala.descricaoSala}
            </p>
            <p>
              <strong>Capacidade:</strong> {sala.capacidadeSala} pessoas
            </p>
            <p>
              <strong>Preço:</strong> R${sala.precoSala}
            </p>
            <p>
              <strong>Cidade:</strong> {sala.cidade}
            </p>
            <p>
              <strong>Bairro:</strong> {sala.bairro}
            </p>
            <p>
              <strong>Rua:</strong> {sala.rua}
            </p>
            <p>
              <strong>Número:</strong> {sala.numero}
            </p>
            <p>
              <strong>Contato:</strong>
            </p>
          </div>
        </div>
      ) : (
        <p>Carregando detalhes...</p>
      )}
    </Principal>
  );
};

export default PaginaDetalhesSala;
