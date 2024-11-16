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

  // Nova função para verificar se o email já está cadastrado
  verificarEmail(email) {
    const usuariosDoLocalStorage = servicosUsuario.listar();
    return usuariosDoLocalStorage.some((usuario) => usuario.email === email);
  }

  obterNomeUsuario() {
    const usuarioLogado = localStorage.getItem("usuario-logado");
    if (usuarioLogado) {
      const usuario = JSON.parse(usuarioLogado); // Converte de volta o objeto de usuário
      return usuario.nome || ""; // Retorna o nome do usuário, caso exista
    }
    return ""; // Caso não tenha um usuário logado, retorna uma string vazia
  }

}

export default ServicoAutenticacao;
