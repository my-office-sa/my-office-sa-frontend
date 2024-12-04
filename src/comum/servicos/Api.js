import axios from "axios";
import ServicoAutenticacao from "./ServicoAutenticacao";

const instanciaApi = axios.create({
  baseURL: "https://my-office-api.onrender.com/",
});

instanciaApi.interceptors.request.use((config) => {
  const instanciaServicoAutenticacao = new ServicoAutenticacao();

  const usuarioLogado = instanciaServicoAutenticacao.buscarUsuarioLogado();
  if (usuarioLogado) {
    config.headers["x-usuario"] = usuarioLogado.id_usuario;
  }

  return config;
});

export default instanciaApi;
