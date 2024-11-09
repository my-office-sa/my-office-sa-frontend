import Principal from '../../comum/componentes/Principal/Principal';
import './PaginaInicial.css';
import { FaMagnifyingGlass } from 'react-icons/fa6';

const PaginaInicial = () => {

  return (
    <Principal>
      <div className="input-container">
        <div className="input-wrapper">
          <input 
            type="text"
            placeholder="Busque sua sala"
          />
          <FaMagnifyingGlass className="search-icon" />
        </div>
      </div>
    </Principal>
  );
};

export default PaginaInicial;
