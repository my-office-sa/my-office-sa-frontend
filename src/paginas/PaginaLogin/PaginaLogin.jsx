import { useState } from "react"
import Principal from "../../comum/componentes/Principal/Principal"
import "./PaginaLogin.css"
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado"
import { Link } from "react-router-dom"

const PaginaLogin = () => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    return <Principal titulo={'Pagina de Login'} voltarPara={'/'}>
        <div className="campo">
        <label>E-mail</label>
            <input type="email" placeholder="Seu e-mail" value={email} onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className="campo">
        <label>Senha</label>
            <input type="password" placeholder="Sua senha" value={senha} onChange={e => setSenha(e.target.value)}/>
        </div>
       <BotaoCustomizado
       cor='primaria'>
        Entrar
       </BotaoCustomizado>
       <span className="">
        Ainda não tem conta? Cadastre-se <Link to="/novo-usuario">aqui!</Link>
      </span>
    </Principal>
}

export default PaginaLogin;