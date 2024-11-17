import { useNavigate } from "react-router-dom";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../comum/componentes/Principal/Principal";
import ServicoAutenticacao from "../../comum/servicos/ServicoAutenticacao";
import { useState } from "react";

const instanciaServicoAutenticacao = new ServicoAutenticacao();

const PaginaMeuPerfil = () => {
  const navigate = useNavigate();
  const usuarioLogado = instanciaServicoAutenticacao.usuarioEstaLogado();
  const [usuarioAutenticado, setUsuarioAutenticado] = useState('');

  const fazerLogout = (event) => {
    event.preventDefault();
    instanciaServicoAutenticacao.logout();
    setUsuarioAutenticado(false);
    navigate("/");
  };

  return (
    <Principal titulo="Meu Perfil" voltarPara="/">
      <div className="campo">
        <label>Nome</label>
        <input type="text" value={usuarioLogado.nome} disabled />
      </div>

      <div className="campo">
        <label>Email</label>
        <input type="text" value={usuarioLogado.email} disabled />
      </div>

      <BotaoCustomizado aoClicar={fazerLogout}>Sair</BotaoCustomizado>
    </Principal>
  );
};

export default PaginaMeuPerfil;