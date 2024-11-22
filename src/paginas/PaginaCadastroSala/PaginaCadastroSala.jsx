import { useEffect, useState } from "react";
import Principal from "../../comum/componentes/Principal/Principal";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import {
  MASCARA_CEP,
  formatarComMascara,
} from "../../comum/utils/mascaras";
import { toast } from "react-toastify";
import ServicosSalas from "../../comum/servicos/ServicosSalas";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const instanciaServicoSalas = new ServicosSalas();

const PaginaCadastroSala = () => {
  const params = useParams();
  const navigate = useNavigate("");

  const [cep, setCep] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [rua, setRua] = useState("");

  const [numero, setNumero] = useState("");
  const [precoSala, setPrecoSala] = useState("");
  const [capacidadeSala, setCapacidadeSala] = useState("");
  const [descricaoSala, setDescricaoSala] = useState("");
  const [nomeArquivo, setNomeArquivo] = useState("");
  const [imagemSala, setImagemSala] = useState("");

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const usuarioLogado = JSON.parse(localStorage.getItem('usuario-logado'))

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
    const file = e.target.files[0];
    if (file) {
      setNomeArquivo(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagemSala(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const buscarCep = async (event) => {
    try {
      const resp = await axios.get(
        `https://brasilapi.com.br/api/cep/v2/${event.target.value}`
      );

      console.log(resp.data);

      setRua(resp.data.street || "");
      setBairro(resp.data.neighborhood || "");
      setCidade(resp.data.city || "");
      setEstado(resp.data.state || "");

      setLatitude(resp.data.location?.coordinates?.latitude || "");
      setLongitude(resp.data.location?.coordinates?.longitude || "");

      if (resp.data.street) {
        document.getElementById("campoNumero").focus();
      }
    } catch (error) {
      toast.error("CEP não encontrado ou erro na consulta.");
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
      precoSala,
      capacidadeSala,
      descricaoSala,
      imagemSala,
      localizacao: { latitude, longitude },
      usuarioId: +usuarioLogado.id,      
    };
   
    if (params.id) {
      instanciaServicoSalas.editarSala(sala);
      toast.success("Tudo Pronto! Dados Atualizados.");
    } else {
      instanciaServicoSalas.cadastrarSala(sala);
      toast.success("Tudo Pronto! Sala Cadastrada!");
    }

    navigate("/minhas-salas");
  };

  return (
    <Principal
      titulo={params.id ? "Editar Sala" : "Cadastrar Sala"}
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
          placeholder="Informe o N° da casa, apartamento ..."
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Preço</label>
        <input
          placeholder="Informe o valor da diária"
          type="text"
          value={precoSala}
          onChange={(e) =>
            setPrecoSala(e.target.value)
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
          {nomeArquivo && <span>{nomeArquivo}</span>}
        </div>
      </div>

      <BotaoCustomizado cor="primaria" aoClicar={salvar}>
        {params.id ? "Atualizar" : "Cadastrar"}
      </BotaoCustomizado>
    </Principal>
  );
};

export default PaginaCadastroSala;
