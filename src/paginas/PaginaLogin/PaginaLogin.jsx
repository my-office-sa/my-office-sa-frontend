import { useState } from "react";
import Principal from "../../comum/componentes/Principal/Principal";
import "./PaginaLogin.css";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ServicoAutenticacao from "../../comum/servicos/ServicoAutenticacao";

const servicoAutenticacao = new ServicoAutenticacao();

const PaginaLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const entrar = async () => {
    try {
      if (!email || !senha) {
        toast.error("Preencha todos os campos.");
        return;
      }
      await servicoAutenticacao.login(email, senha);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  return (
    <Principal titulo={"Login"} voltarPara={"/"}>
      <div className="campo">
        <label>E-mail</label>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Senha</label>
        <input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </div>
      <BotaoCustomizado cor="primaria" aoClicar={entrar}>
        Entrar
      </BotaoCustomizado>
      <div className="link_cadastro_login">
        <p> Ainda não tem conta? Cadastre-se </p>
        <Link to="/novo-usuario">
          <strong> aqui!</strong>
        </Link>
      </div>
    </Principal>
  );
};

export default PaginaLogin;
