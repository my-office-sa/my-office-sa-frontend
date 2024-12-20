import { Link, useNavigate } from "react-router-dom";
import Principal from "../../comum/componentes/Principal/Principal";
import ServicosSalas from "../../comum/servicos/ServicosSalas";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./PaginaMinhasSalas.css";
import instanciaApi from "../../comum/servicos/Api";

const instanciaServicoSalas = new ServicosSalas();

const PaginaMinhasSalas = () => {
  const navigate = useNavigate();
  const [listaSalas, setListaSalas] = useState([]);

  useEffect(() => {
    const buscarSalas = async () => {
      const response = await instanciaServicoSalas.listarMinhasSalas();
      setListaSalas(response.data);
    };
    buscarSalas();
  }, []);

  const navegarParaEdicao = (idSala) => {
    navigate(`/cadastro-sala/${idSala}`);
  };

  const excluirSala = async (idSala) => {
    if (confirm("Tem certeza que deseja excluir esta sala?")) {
      await instanciaServicoSalas.excluirSala(idSala);
      toast.success("Exclusão Confirmada!");
    }
  };

  return (
    <Principal voltarPara="/" titulo="Salas Cadastradas">
      {listaSalas.length === 0 ? (
        <div className="link_cadastro">
          <p>Você ainda não possui nenhuma sala cadastrada.</p>
          <Link to="/cadastro-sala">
            <strong>Cadastre aqui!</strong>
          </Link>
        </div>
      ) : (
        listaSalas.map((sala) => (
          <div key={sala.id_sala} className="minhas_salas">
            <div>
              {sala.imagem && (
                <img
                  className="item-cliente-imagem"
                  src={sala.imagem}
                  alt={sala.nome}
                />
              )}
            </div>
            <div className="dados_minhas_salas">
              <ul>
                <li>
                  <strong>ID Sala:</strong>
                  {sala.id_sala}
                </li>
                <li>
                  <FaEdit
                    size={18}
                    onClick={() => navegarParaEdicao(sala.id_sala)}
                    cursor="pointer"
                  />
                  Editar
                </li>
                <li>
                  {" "}
                  <FaTrash
                    size={18}
                    color="grey"
                    onClick={() => excluirSala(sala.id_sala)}
                    cursor="pointer"
                  />{" "}
                  Excluir
                </li>
              </ul>
            </div>
          </div>
        ))
      )}
    </Principal>
  );
};

export default PaginaMinhasSalas;
