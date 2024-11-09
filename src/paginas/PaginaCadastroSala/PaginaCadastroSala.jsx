import { useState } from "react";
import Principal from "../../comum/componentes/Principal/Principal";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import { MASCARA_CEP,
    MASCARA_VALOR,
    formatarComMascara
 } from "../../comum/utils/mascaras";

const PaginaCadastroSala = () => {
    const [cep, setCep] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [bairro, setBairro] = useState('');
    const [data, setData] = useState('');
    const [precoSala, setPrecoSala] = useState('');
    const [capacidadeSala, setCapacidadeSala] = useState('');
    const [descricaoSala, setDescricaoSala] = useState('');
    const [imagemSala, setImagemSala] = useState('');

    // Função para disparar o click no input de arquivo
    const handleFileClick = () => {
        document.getElementById("imagemSala").click();
    };

    // Função para lidar com o arquivo selecionado
    const handleFileChange = (e) => {
        setImagemSala(e.target.files[0]);
    };

    return (
        <Principal titulo={'Cadastro de Sala'} voltarPara={'/'}>
            <div className="campo">
                <label>Cep</label>
                <input
                    type="tel"
                    placeholder="Informe o cep"
                    value={cep}
                    onChange={e => setCep(formatarComMascara(e.target.value, MASCARA_CEP))}
                />
            </div>
            <div className="campo">
                <label>Estado</label>
                <input
                    type="text"
                    placeholder="Seu estado"
                    value={estado}
                    onChange={e => setEstado(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Cidade</label>
                <input
                    type="text"
                    placeholder="Sua cidade"
                    value={cidade}
                    onChange={e => setCidade(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Bairro</label>
                <input
                    type="text"
                    placeholder="Seu bairro"
                    value={bairro}
                    onChange={e => setBairro(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Data</label>
                <input
                    type="date"
                    value={data}
                    onChange={e => setData(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Preço</label>
                <input
                    type="number"
                    value={precoSala}
                    onChange={e => setPrecoSala(formatarComMascara(e.target.value, MASCARA_VALOR))}
                />
            </div>
            <div className="campo">
                <label>Capacidade</label>
                <input
                    type="number"
                    value={capacidadeSala}
                    onChange={e => setCapacidadeSala(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Descrição</label>
                <input
                    type="text"
                    placeholder="Descrição da sala"
                    value={descricaoSala}
                    onChange={e => setDescricaoSala(e.target.value)}
                />
            </div>

            {/* Campo de input de arquivo estilizado */}
            <div className="campo">
                <label>Imagens</label>
                <div className="file-input-container">
                    <BotaoCustomizado type="button"  aoClicar={handleFileClick}>
                        Escolher Arquivo
                    </BotaoCustomizado>
                    <input
                        id="imagemSala"
                        type="file"
                        style={{ display: 'none' }} // Esconde o campo de input original
                        onChange={handleFileChange}
                    />
                    {imagemSala && <span>{imagemSala.name}</span>} {/* Exibe o nome do arquivo selecionado */}
                </div>
            </div>

            <BotaoCustomizado cor="primaria">
                Cadastrar Sala
            </BotaoCustomizado>
        </Principal>
    );
};

export default PaginaCadastroSala;
