import { useState } from "react"
import Principal from "../../comum/componentes/Principal/Principal"
import "./PaginaLogin.css"
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado"

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
       cor='secundaria'>
        Entrar
       </BotaoCustomizado>
    </Principal>
}

export default PaginaLogin;