import instanciaApi from "./Api";
import ServicosUsuario from "./ServicosUsuario";

const servicosUsuario = new ServicosUsuario();

class ServicoAutenticacao {
  async login(email, senha) {
    const response = await instanciaApi.post("/login", { email, senha });
    localStorage.setItem("usuario-logado", JSON.stringify(response.data));
  }

  usuarioEstaLogado() {
    const usuarioLogado = localStorage.getItem("usuario-logado");
    if (usuarioLogado) {
      return true;
    }

    return false;
  }

  logout() {
    localStorage.removeItem("usuario-logado");
  }

  verificarEmail(email) {
    const usuariosDoLocalStorage = servicosUsuario.listar();
    return usuariosDoLocalStorage.some((usuario) => usuario.email === email);
  }

  obterNomeUsuario() {
    const usuarioLogado = localStorage.getItem("usuario-logado");
    if (usuarioLogado) {
      const usuario = JSON.parse(usuarioLogado);
      return usuario.nome || "";
    }
    return "";
  }

  buscarUsuarioLogado() {
    const usuarioLogado = localStorage.getItem("usuario-logado");
    if (usuarioLogado) {
      return JSON.parse(usuarioLogado);
    }

    return undefined;
  }
}

export default ServicoAutenticacao;
