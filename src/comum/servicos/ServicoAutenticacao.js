import ServicosUsuario from "./ServicosUsuario";

const servicosUsuario = new ServicosUsuario();

class ServicoAutenticacao {
  login(email, senha) {
    const usuariosDoLocalStorage = servicosUsuario.listar();

    const usuarioLogado = usuariosDoLocalStorage.find(
      (u) => u.email === email && u.senha === senha
    );

    if (usuarioLogado) {
      localStorage.setItem("usuario-logado", JSON.stringify(usuarioLogado));
    }

    return usuarioLogado;
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
    const usuarioLogado = localStorage.getItem('usuario-logado');
    if (usuarioLogado) {
      return JSON.parse(usuarioLogado);
    }

    return undefined;
  }

}

export default ServicoAutenticacao;
