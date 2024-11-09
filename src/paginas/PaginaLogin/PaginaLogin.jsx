import { useState } from "react"
import Principal from "../../comum/componentes/Principal/Principal"
import "./PaginaLogin.css"
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import ServicoAutenticacao from "../../comum/servicos/ServicoAutenticacao"

const servicoAutenticacao = new ServicoAutenticacao()

const PaginaLogin = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const entrar = () => {
        if (!email || !senha) {
          toast.error('Preencha todos os campos.');
          return;
        }
    
        const usuarioLogado = servicoAutenticacao.login(email, senha);
        if (usuarioLogado) {
          navigate('/');
        } else {
          toast.error('Usuário ou senha inválida.');
        }
      };

    return <Principal titulo={'Login'} voltarPara={'/'}>
        <div className="campo">
        <label>E-mail</label>
            <input type="email" placeholder="Seu e-mail" value={email} onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className="campo">
        <label>Senha</label>
            <input type="password" placeholder="Sua senha" value={senha} onChange={e => setSenha(e.target.value)}/>
        </div>
       <BotaoCustomizado
       cor='primaria'
       aoClicar={entrar}>
        Entrar
       </BotaoCustomizado>
       <span className="">
        Ainda não tem conta? Cadastre-se <Link to="/novo-usuario">aqui!</Link>
      </span>
    </Principal>
}

export default PaginaLogin;