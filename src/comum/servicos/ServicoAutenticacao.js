import ServicosUsuario from "./ServicosUsuario";



const servicosUsuario = new ServicosUsuario()

class ServicoAutenticacao {
    login(email, senha) {
      const usuariosDoLocalStorage = servicosUsuario.listar();
  
      const usuarioLogado = usuariosDoLocalStorage.find((u) => u.email === email && u.senha === senha);
  
      if (usuarioLogado) {
        localStorage.setItem('usuario-logado', JSON.stringify(usuarioLogado));
      }
  
      return usuarioLogado;
    }
  
    usuarioEstaLogado() {
      const usuarioLogado = localStorage.getItem('usuario-logado');
      if (usuarioLogado) {
        return true;
      }
  
      return false;
    }
  }
  
  export default ServicoAutenticacao;