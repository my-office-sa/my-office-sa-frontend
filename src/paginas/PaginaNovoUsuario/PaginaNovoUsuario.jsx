import { useState } from "react";
import Principal from "../../comum/componentes/Principal/Principal";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import "./PaginaNovoUsuario.css";
import {
  MASCARA_CELULAR,
  formatarComMascara,
} from "../../comum/utils/mascaras";
import ServicosUsuario from "../../comum/servicos/ServicosUsuario";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ServicoAutenticacao from "../../comum/servicos/ServicoAutenticacao";

const servicoUsuario = new ServicosUsuario();
const servicoAutenticacao = new ServicoAutenticacao();

const PaginaNovoUsuario = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const navigate = useNavigate();

  const salvar = async () => {
    try {
      if (!nome || !email || !celular || !senha || !confirmarSenha) {
        toast.error("Preencha todos os campos obrigatórios!");
        return;
      }
      const usuario = {
        nome,
        email,
        celular,
        senha,
      };

      if (senha === confirmarSenha) {
        await servicoUsuario.cadastrarUsuario(usuario);
      } else {
        toast.error("Senhas são diferentes!");
        return;
      }
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  return (
    <Principal titulo="Novo Usuário" voltarPara="/login">
      <div className="campo">
        <label>Nome</label>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
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
        <label>Celular</label>
        <input
          type="tel"
          placeholder="Digite seu número de celular"
          value={celular}
          onChange={(e) =>
            setCelular(formatarComMascara(e.target.value, MASCARA_CELULAR))
          }
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
      <div className="campo">
        <label>Confirmar Senha</label>
        <input
          type="password"
          placeholder="Repita sua senha"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
        />
      </div>
      <BotaoCustomizado cor="primaria" aoClicar={salvar}>
        Cadastrar
      </BotaoCustomizado>
    </Principal>
  );
};

export default PaginaNovoUsuario;
