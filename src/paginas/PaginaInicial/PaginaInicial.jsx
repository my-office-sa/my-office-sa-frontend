import { useNavigate } from 'react-router-dom';
import BotaoCustomizado from '../../comum/componentes/BotaoCustomizado/BotaoCustomizado';
import Principal from '../../comum/componentes/Principal/Principal';
import './PaginaInicial.css';

const PaginaInicial = () => {
  const navigate = useNavigate();

  return (
    <Principal titulo="Página Inicial">


    </Principal>
  );
};

export default PaginaInicial;