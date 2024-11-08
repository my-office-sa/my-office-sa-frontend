import { useState } from "react"
import Principal from "../../comum/componentes/Principal/Principal"
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado"
import { Link } from "react-router-dom"

const PaginaCadastroSala = () => {
    const [cep, setCep] = useState('')
    const [estado, setEstado] = useState('')
    const [cidade, setCidade] = useState('')
    const [bairro, setBairro] = useState('')
    const [data, setData] = useState('')
    const [precoSala, setPrecoSala] = useState('')
    const [capacidadeSala, setCapacidadeSala] = useState('')
    const [descricaoSala, setDescricaoSala] = useState('')
    const [imagemSala, setImagemSala] = useState('')
    
    return <Principal titulo={'Cadastro de Sala'} voltarPara={'/'}>
        <div className="campo">
        <label>Cep</label>
            <input type="tel" placeholder="Informe o cep" value={cep} onChange={e => setCep(e.target.value)}/>
        </div>
        <div className="campo">
        <label>Estado</label>
            <input type="text" placeholder="Seu estado" value={estado} onChange={e => setEstado(e.target.value)}/>
        </div>
        <div className="campo">
        <label>Cidade</label>
            <input type="text" placeholder="Sua cidade" value={cidade} onChange={e => setCidade(e.target.value)}/>
        </div>
        <div className="campo">
        <label>Bairro</label>
            <input type="text" placeholder="Seu bairro" value={bairro} onChange={e => setBairro(e.target.value)}/>
        </div>
        <div className="campo">
        <label>Data</label>
            <input type="date" value={data} onChange={e => setData(e.target.value)}/>
        </div>
        <div className="campo">
        <label>Preço</label>
            <input type="number" value={precoSala} onChange={e => setPrecoSala(e.target.value)}/>
        </div>
        <div className="campo">
        <label>Capacidade</label>
            <input type="number" value={capacidadeSala} onChange={e => setCapacidadeSala(e.target.value)}/>
        </div>
        <div className="campo">
        <label>Descrição</label>
            <input type="text" placeholder="Descrição da sala" value={descricaoSala} onChange={e => setDescricaoSala(e.target.value)}/>
        </div>
        <div className="campo">
        <label>Imagens</label>
            <input type="file" value={imagemSala} onChange={e => setImagemSala(e.target.value)}/>
        </div>
       <BotaoCustomizado
       cor='primaria'>
        Cadastrar Sala
       </BotaoCustomizado>
    </Principal>
}

export default PaginaCadastroSala;