import { Link, useNavigate } from "react-router-dom";
import Principal from "../../comum/componentes/Principal/Principal";
import ServicosSalas from "../../comum/servicos/ServicosSalas";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

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
      toast.success("Exclusão Confirmada!")
    }
  };

  return (
    <Principal voltarPara="/" titulo="Minhas Salas Cadastradas">
      <Link to="/cadastro-sala">Novo</Link>

      {listaSalas.map((sala) => {
        return (
          <div
            key={sala.id}
            className="pagina-lista-clientes__item-cliente"
          >
            {sala.nome}

            <div className="pagina-lista-clientes__item-cliente-acoes">
              <FaEdit
                size={24}
                onClick={() =>
                  navegarParaEdicao(sala.id)
                }
              />

              <FaTrash
                size={24}
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
