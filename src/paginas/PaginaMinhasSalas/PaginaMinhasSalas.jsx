import { Link, useNavigate } from "react-router-dom";
import Principal from "../../comum/componentes/Principal/Principal";
import ServicosSalas from "../../comum/servicos/ServicosSalas";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import './PaginaMinhasSalas.css';

const instanciaServicoSalas = new ServicosSalas();

const PaginaMinhasSalas = () => {
  const navigate = useNavigate();
  const [listaSalas, setListaSalas] = useState([]);

  useEffect(() => {
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

  const usuarioLogado = JSON.parse(localStorage.getItem('usuario-logado')) 

  const minhasSalas = listaSalas.filter((sala) => sala.usuarioId == usuarioLogado.id)

  return (
    <Principal voltarPara="/" titulo="Minhas Salas Cadastradas">
      {minhasSalas.length === 0 ? (
        <div className="link_cadastro">
          <p>Você ainda não possui nenhuma sala cadastrada.</p>
          <Link to="/cadastro-sala">
            <strong>Cadastre aqui!</strong>
          </Link>
        </div>
      ) : (
        minhasSalas.map((sala) => (
          <div key={sala.id} className="minhas_salas">
            <div>
              {sala.imagemSala && (
                <img
                  className="item-cliente-imagem"
                  src={sala.imagemSala}
                  alt={sala.nome}
                />
              )}
            </div>
            <div className="dados_minhas_salas">
              <ul>
                <li><strong>ID Sala:</strong>{sala.id}</li>
                <li><FaEdit
                    size={18}
                    onClick={() => navegarParaEdicao(sala.id)}
                    cursor="pointer"
                  />Editar</li>
                <li> <FaTrash
                    size={18}
                    color="grey"
                    onClick={() => excluirSala(sala.id)}
                    cursor="pointer"
                  /> Excluir</li>
              </ul>
            </div>
          </div>
        ))
      )}
    </Principal>
  );
};

export default PaginaMinhasSalas;
