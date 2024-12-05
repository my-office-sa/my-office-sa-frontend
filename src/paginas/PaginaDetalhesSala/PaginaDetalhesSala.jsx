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
  const [carregando, setCarregando] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const buscaSala = async () => {
      try {
        const salasApi = await instanciaServicoSalas.listar();
        const salaEncontrada = salasApi.data.find(
          (sala) => sala.id_sala === Number(idSala)
        );
        
        if (salaEncontrada) {
          setSala(salaEncontrada);
          localStorage.setItem("sala-encontrada", JSON.stringify(salaEncontrada));
        } else {
          navigate("/");
        }
      } catch (error) {
        console.error("Erro ao buscar sala:", error);
        navigate("/");
      } finally {
        setCarregando(false);
      }
    };

    buscaSala();
  }, [idSala, navigate]);

  const toggleImagem = () => {
    setImagemAmpliada(!imagemAmpliada);
  };

  if (carregando) {
    return <p>Carregando detalhes...</p>; 
  }

  return (
    <Principal titulo="Detalhes da Sala" voltarPara="/">
      {sala ? (
        <div className="detalhes-sala">
          <div className="detalhes-imagem">
            {sala.imagem && (
              <img
                src={sala.imagem}
                alt={sala.nome}
                className={`imagem-detalhe-sala ${imagemAmpliada ? "ampliada" : ""}`}
                onClick={toggleImagem}
              />
            )}
          </div>
          <br />
          <br />
          <div className="detalhes-info">
            <h2>{sala.nome}</h2>
            <p>
              <strong>ID:</strong> {sala.id_sala}
            </p>
            <p>
              <strong>Descrição:</strong> {sala.descricao}
            </p>
            <p>
              <strong>Capacidade:</strong> {sala.capacidade} pessoas
            </p>
            <p>
              <strong>Preço:</strong> R${sala.preco}
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
        <p>Sala não encontrada.</p>
      )}
    </Principal>
  );
};

export default PaginaDetalhesSala;
