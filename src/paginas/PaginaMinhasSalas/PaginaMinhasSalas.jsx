import { Link, useNavigate } from "react-router-dom";
import Principal from "../../comum/componentes/Principal/Principal";
import ServicosSalas from "../../comum/servicos/ServicosSalas";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import PaginaCadastroSala from "../PaginaCadastroSala/PaginaCadastroSala";

const instanciaServicoSalas = new ServicosSalas();

const PaginaMinhasSalas = () => {
  const navigate = useNavigate();
  const [listaSalas, setListaSalas] = useState([]);

  useEffect(() => {
    // Supondo que `instanciaServicoSalas.listar()` retorna uma lista de salas
    const salasDoLocalStorage = instanciaServicoSalas.listar();
    setListaSalas(salasDoLocalStorage);
  }, []);

  const navegarParaEdicao = (idSala) => {
    navigate(`/cadastro-sala/${idSala}`);
  };

  const excluirSala = (idSala) => {
    if (confirm("Tem certeza que deseja excluir está sala?")) {
      const listaAtualizada = instanciaServicoSalas.excluirSala(idSala);
      setListaSalas(listaAtualizada);
      toast.success("Exclusão Confirmada!");
    }
  };

  return (
    <Principal voltarPara="/" titulo="Salas Cadastradas">
      <Link to="/cadastro-sala" style={{textAlign:"center"}} ><strong>Cadastre aqui!</strong></Link>

      {listaSalas.map((sala) => {
            return (
                <div key={sala.id} className="pagina-lista-clientes__item-cliente">
                  {/* Contêiner para imagem e nome da sala */}
                  <div className="item-cliente-info">
                    {/* Exibindo a imagem da sala */}
                    {sala.imagemSala && (
                      <img
                        src={sala.imagemSala}
                        alt={sala.nome}
                        className="item-cliente-imagem"
                      />
                    )}
              
                    {/* Exibindo o nome da sala */}
                    <div className="item-cliente-nome">{sala.nome}</div>
                  </div>
              
                  {/* Contêiner para as ações (editar, excluir) */}
                <div className="pagina-lista-clientes__item-cliente-acoes">
                  <label>Editar: </label>
                    <FaEdit
                      size={18}
                      className="icone-editar"
                      onClick={() => navegarParaEdicao(sala.id)}
                    />
                    <label>Excluir: </label>
                    <FaTrash
                      size={18}
                      className="icone-excluir"
                      color="red"
                      onClick={() => excluirSala(sala.id)}
                    />
                  </div>
                </div>
              );
              
      })}
    </Principal>
  );
};

export default PaginaMinhasSalas;
