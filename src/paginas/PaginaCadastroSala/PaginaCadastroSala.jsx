import { useEffect, useState } from "react";
import Principal from "../../comum/componentes/Principal/Principal";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import {
  MASCARA_CEP,
  MASCARA_VALOR,
  formatarComMascara,
} from "../../comum/utils/mascaras";
import { toast } from "react-toastify";
import ServicosSalas from "../../comum/servicos/ServicosSalas";
import { useParams } from "react-router-dom";

const instanciaServicoSalas = new ServicosSalas();

const PaginaCadastroSala = () => {
  const params = useParams();

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

  useEffect(() => {
    if (params.id) {
      const SalaEncontrada = instanciaServicoSalas.buscarSalaPorId(params.id);
      if (SalaEncontrada) {
        setCep(SalaEncontrada.cep);
        setEstado(SalaEncontrada.estado);
        setCidade(SalaEncontrada.cidade);
        setBairro(SalaEncontrada.bairro);
        setRua(SalaEncontrada.rua);
        setNumero(SalaEncontrada.numero);
        setData(SalaEncontrada.data);
        setPrecoSala(SalaEncontrada.precoSala);
        setCapacidadeSala(SalaEncontrada.capacidadeSala);
        setDescricaoSala(SalaEncontrada.descricaoSala);
        setImagemSala(SalaEncontrada.imagemSala);
      }
    }
  }, [params.id]);

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

  const salvar = () => {
    if (
      !cep ||
      !estado ||
      !cidade ||
      !bairro ||
      !rua ||
      !numero ||
      !data ||
      !precoSala ||
      !capacidadeSala ||
      !descricaoSala ||
      !imagemSala
    ) {
      toast.error("Preencha todos os campos!");
      return;
    }

    const sala = {
      id: params.id ? +params.id : Date.now(),
      cep,
      estado,
      cidade,
      bairro,
      rua,
      numero,
      data,
      precoSala,
      capacidadeSala,
      descricaoSala,
      imagemSala,
    };

    if (params.id) {
      instanciaServicoSalas.editarSala(sala);
      toast.success("Tudo Pronto! Dados Atualizados.")
    } else {
      instanciaServicoSalas.cadastrarSala(sala);
      toast.success("Tudo Pronto! Sala Cadastrada!");
    }

  };

  return (
    <Principal
      titulo={params.id ? "Editar Sala" : "Cadastar Sala"}
      voltarPara={"/minhas-salas"}
    >
      {params.id && (
        <div className="campo">
          <label>Id</label>
          <input type="text" value={params.id} disabled />
        </div>
      )}

      <div className="campo">
        <label>Cep</label>
        <input
          type="tel"
          placeholder="Informe seu cep"
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
          placeholder="Informe seu estado"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Cidade</label>
        <input
          type="text"
          placeholder="Informe sua cidade"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Bairro</label>
        <input
          type="text"
          placeholder="Informe seu bairro"
          value={bairro}
          onChange={(e) => setBairro(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Rua</label>
        <input
          type="text"
          placeholder="Informe sua rua"
          value={rua}
          onChange={(e) => setRua(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Número</label>
        <input
          id="campoNumero"
          type="text"
          placeholder=" Informe o N° da casa, apartamento ..."
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
        placeholder="Informe o valor da diária"
          type="text"
          value={precoSala}
          onChange={(e) =>
            setPrecoSala(formatarComMascara(e.target.value, MASCARA_VALOR))
          }
        />
      </div>

      <div className="campo">
        <label>Capacidade</label>
        <input
        placeholder="Informe a quantidade de pessoas"
          type="number"
          value={capacidadeSala}
          onChange={(e) => setCapacidadeSala(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Descrição</label>
        <input
          type="text"
          placeholder="Descreva sua sala"
          value={descricaoSala}
          onChange={(e) => setDescricaoSala(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Imagens</label>
        <div className="file-input-container">
          <BotaoCustomizado type="button" aoClicar={handleFileClick}>
            Escolher Arquivo
          </BotaoCustomizado>
          <input
            id="imagemSala"
            type="file"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          {imagemSala && <span>{imagemSala.name}</span>}{" "}
        </div>
      </div>

      <BotaoCustomizado cor="primaria" aoClicar={salvar}>
        {params.id ? "Atualizar" : "Cadastar"}
      </BotaoCustomizado>
    </Principal>
  );
};

export default PaginaCadastroSala;
