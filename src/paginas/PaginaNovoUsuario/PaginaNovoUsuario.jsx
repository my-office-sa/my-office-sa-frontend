import { useState } from "react"
import Principal from "../../comum/componentes/Principal/Principal"
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado"
import "./PaginaNovoUsuario.css"

const PaginaNovoUsuario = () => {
  
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')


    return <Principal
    titulo="Novo Usuário"
    voltarPara='/login'>

<div className="campo">
        <label>E-mail</label>
            <input type="email" placeholder="Digite seu e-mail" value={email} onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className="campo">
        <label>Senha</label>
            <input type="password" placeholder="Digite sua senha" value={senha} onChange={e => setSenha(e.target.value)}/>
        </div>
        <div className="campo">
        <label>Confirmar Senha</label>
            <input type="password" placeholder="Repita sua senha" value={confirmarSenha} onChange={e => setConfirmarSenha(e.target.value)}/>
        </div>
       <BotaoCustomizado
       cor='primaria'>
        Entrar
       </BotaoCustomizado>




    </Principal>
}

export default PaginaNovoUsuario;