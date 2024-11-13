import { useState } from "react";
import Principal from "../../comum/componentes/Principal/Principal";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import {
  MASCARA_CEP,
  MASCARA_VALOR,
  formatarComMascara,
} from "../../comum/utils/mascaras";
import { toast } from "react-toastify";
import React, { useRef } from "react";

const PaginaCadastroSala = () => {
  const [cep, setCep] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [data, setData] = useState("");
  const [precoSala, setPrecoSala] = useState("");
  const [capacidadeSala, setCapacidadeSala] = useState("");
  const [descricaoSala, setDescricaoSala] = useState("");
  const [imagemSala, setImagemSala] = useState("");

  const handleFileClick = () => {
    document.getElementById("imagemSala").click();
  };

  const handleFileChange = (e) => {
    setImagemSala(e.target.files[0]);
  };

  const buscarCep = (e) => {
    const cepDigitado = e.target.value.replace(/\D/g, "");
    setCep(e.target.value);

    if (cepDigitado.length === 8) {
      fetch(`https://viacep.com.br/ws/${cepDigitado}/json/`)
        .then((res) => res.json())
        .then((data) => {
          if (data.erro) {
            toast.error("CEP não encontrado!");
            return;
          }

          setEstado(data.uf || "");
          setCidade(data.localidade || "");
          setBairro(data.bairro || "");
          setRua(data.logradouro || "");

          if (setEstado) {
            document.getElementById("campoNumero").focus();
          }
        });
    }
  };
  return (
    <Principal titulo={"Cadastro de Sala"} voltarPara={"/"}>
      <div className="campo">
        <label>Cep</label>
        <input
          type="tel"
          placeholder="Informe o cep"
          onBlur={buscarCep}
          value={cep}
          onChange={(e) =>
            setCep(formatarComMascara(e.target.value, MASCARA_CEP))
          }
        />
      </div>

      <div className="campo">
        <label>Estado</label>
        <input
          type="text"
          placeholder="Seu estado"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Cidade</label>
        <input
          type="text"
          placeholder="Sua cidade"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Bairro</label>
        <input
          type="text"
          placeholder="Seu bairro"
          value={bairro}
          onChange={(e) => setBairro(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Rua</label>
        <input
          type="text"
          placeholder="Sua rua"
          value={rua}
          onChange={(e) => setRua(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Número</label>
        <input
          id="campoNumero"
          type="number"
          placeholder="N° da casa ou apartamento"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Data</label>
        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Preço</label>
        <input
          type="number"
          value={precoSala}
          onChange={(e) =>
            setPrecoSala(formatarComMascara(e.target.value, MASCARA_VALOR))
          }
        />
      </div>

      <div className="campo">
        <label>Capacidade</label>
        <input
          type="number"
          value={capacidadeSala}
          onChange={(e) => setCapacidadeSala(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Descrição</label>
        <input
          type="text"
          placeholder="Descrição da sala"
          value={descricaoSala}
          onChange={(e) => setDescricaoSala(e.target.value)}
        />
      </div>

      {/* Campo de input de arquivo estilizado */}
      <div className="campo">
        <label>Imagens</label>
        <div className="file-input-container">
          <BotaoCustomizado type="button" aoClicar={handleFileClick}>
            Escolher Arquivo
          </BotaoCustomizado>
          <input
            id="imagemSala"
            type="file"
            style={{ display: "none" }} // Esconde o campo de input original
            onChange={handleFileChange}
          />
          {imagemSala && <span>{imagemSala.name}</span>}{" "}
          {/* Exibe o nome do arquivo selecionado */}
        </div>
      </div>

      <BotaoCustomizado cor="primaria">Cadastrar Sala</BotaoCustomizado>
    </Principal>
  );
};

export default PaginaCadastroSala;
