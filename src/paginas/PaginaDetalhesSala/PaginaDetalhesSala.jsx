import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Principal from "../../comum/componentes/Principal/Principal";
import ServicosSalas from "../../comum/servicos/ServicosSalas";
import ServicosUsuario from "../../comum/servicos/ServicosUsuario";
import "./PaginaDetalhesSala.css";
import ServicoAutenticacao from "../../comum/servicos/ServicoAutenticacao";

const instanciaServicoSalas = new ServicosSalas();
const instanciaServicoUsuario = new ServicosUsuario();
const instanciaServicoAutenticacao = new ServicoAutenticacao();

const PaginaDetalhesSala = () => {
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(false);
  const { idSala } = useParams();
  const [sala, setSala] = useState(null);
  const [celular, setCelular] = useState("");
  const [imagemAmpliada, setImagemAmpliada] = useState(false);
  const [carregando, setCarregando] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const usuarioEstaLogado = instanciaServicoAutenticacao.usuarioEstaLogado();
    setUsuarioAutenticado(usuarioEstaLogado);
  }, []);

  useEffect(() => {
    const buscaSala = async () => {
      try {
        const salasApi = await instanciaServicoSalas.listar();
        const salaEncontrada = salasApi.data.find(
          (sala) => sala.id_sala === Number(idSala)
        );

        if (salaEncontrada) {
          setSala(salaEncontrada);
          localStorage.setItem(
            "sala-encontrada",
            JSON.stringify(salaEncontrada)
          );
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

    const buscarDonoSala = async () => {
      const salaEncontrada = JSON.parse(
        localStorage.getItem("sala-encontrada")
      );
      const id_dono = salaEncontrada.usuario_id;
      const donoSala = await instanciaServicoUsuario.buscarPorId(id_dono);

      const formatarCelular = (celular) => {
        return celular.replace(/\D/g, "");
      };
      const celularFormatado = formatarCelular(donoSala.celular);

      setCelular(celularFormatado);
    };

    buscarDonoSala();
  }, [idSala, navigate]);

  const toggleImagem = () => {
    setImagemAmpliada(!imagemAmpliada);
  };

  const handleWhatsAppClick = (e) => {
    try {
      if (!usuarioAutenticado) {
        e.preventDefault();
        toast.error("Você precisa estar logado para entrar em contato pelo WhatsApp.");
      }
    } catch (error) {
      console.error("Erro ao verificar autenticação:", error);
    }
  };

  if (carregando) {
    return <Principal titulo="Carregando..." />;
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
                className={`imagem-detalhe-sala ${
                  imagemAmpliada ? "ampliada" : ""
                }`}
                onClick={toggleImagem}
              />
            )}
          </div>
          <br />
          <br />
          <div className="detalhes-info">
            <h2>{sala.nome}</h2>
            <p>
              <strong>Descrição:</strong> <span>{sala.descricao}</span>
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
              <strong>Rua:</strong> <span>{sala.rua + ", " + sala.numero}</span>
            </p>
            <p>
              <div className="social-wts">
                <strong>Contato:</strong>
                <Link
                  to={`https://wa.me/${celular}`}
                  className="whatsapp-link"
                  onClick={handleWhatsAppClick}
                >
                  <img
                    src="/whatsapp.png"
                    alt="WhatsApp"
                    className="whatsapp-icon"
                  />
                </Link>
              </div>
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
