import { useNavigate } from 'react-router-dom';
import BotaoCustomizado from '../../comum/componentes/BotaoCustomizado/BotaoCustomizado';
import Principal from '../../comum/componentes/Principal/Principal';
import './PaginaInicial.css';

const PaginaInicial = () => {
  const navigate = useNavigate();

  return (
    <Principal titulo="Página Inicial">
      <BotaoCustomizado
        cor="primaria"
        aoClicar={() => navigate('/login')}
      >
        Página de Login
      </BotaoCustomizado>


    </Principal>
  );
};

export default PaginaInicial;