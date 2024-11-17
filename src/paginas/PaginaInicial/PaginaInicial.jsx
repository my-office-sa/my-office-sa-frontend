import { useState, useEffect } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import Principal from '../../comum/componentes/Principal/Principal';
import CardSalas from '../../comum/componentes/CardSalas/CardSalas';
import ServicosSalas from '../../comum/servicos/ServicosSalas';
import './PaginaInicial.css';

const instanciaServicoSalas = new ServicosSalas();

const PaginaInicial = () => {
  const [listaSalas, setListaSalas] = useState([]);
  const [salasFiltradas, setSalasFiltradas] = useState([]);
  const [pesquisa, setPesquisa] = useState('');

  useEffect(() => {
    const salasDoLocalStorage = instanciaServicoSalas.listar();
    setListaSalas(salasDoLocalStorage);
    setSalasFiltradas(salasDoLocalStorage);
  }, []);

  const filtrarSalas = (e) => {
    const termoPesquisa = e.target.value.toLowerCase();
    setPesquisa(termoPesquisa);

    if (termoPesquisa === '') {
      setSalasFiltradas(listaSalas);
    } else {
      const salasFiltradas = listaSalas.filter((sala) => {
        const cidade = sala.cidade ? sala.cidade.toLowerCase() : '';
        const bairro = sala.bairro ? sala.bairro.toLowerCase() : '';

        return (
          cidade.includes(termoPesquisa) ||
          bairro.includes(termoPesquisa)
        );
      });
      setSalasFiltradas(salasFiltradas);
    }
  };

  return (
    <Principal>
      <div className="input-container">
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Busque sua sala"
            value={pesquisa}
            onChange={filtrarSalas}
          />
          <FaMagnifyingGlass className="search-icon" />
        </div>
      </div>

      <div>
        {salasFiltradas.length === 0 ? (
          <p>Não há salas disponíveis para o filtro informado.</p>
        ) : (
          salasFiltradas.map((sala) => (
            <CardSalas key={sala.id} sala={sala} />
          ))
        )}
      </div>
    </Principal>
  );
};

export default PaginaInicial;
