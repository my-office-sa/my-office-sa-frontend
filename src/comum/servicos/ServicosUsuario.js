import instanciaApi from "./Api";

class ServicosUsuario {
  listar() {
    const usuariosDoLocalStorage = localStorage.getItem("lista-usuarios");
    if (usuariosDoLocalStorage) {
      return JSON.parse(usuariosDoLocalStorage);
    }

    return [];
  }

  cadastrarUsuario(usuario) {
    return instanciaApi.post("/usuarios", usuario);
  }

  editarUsuario(usuario) {
    const usuariosDoLocalStorage = this.listar();
    const indexUsuario = usuariosDoLocalStorage.findIndex(
      (u) => u.id === +usuario.id
    );
    usuariosDoLocalStorage[indexUsuario] = usuario;
    localStorage.setItem(
      "lista-usuarios",
      JSON.stringify(usuariosDoLocalStorage)
    );
  }

  buscarPorId(idUsuario) {
    const usuariosDoLocalStorage = this.listar();
    return usuariosDoLocalStorage.find((u) => u.id === +idUsuario);
  }

  excluirUsuario(idUsuario) {
    const usuariosDoLocalStorage = this.listar();

    const listaAtualizada = usuariosDoLocalStorage.filter((u) => {
      return u.id !== idUsuario;
    });

    localStorage.setItem("lista-usuarios", JSON.stringify(listaAtualizada));
    return listaAtualizada;
  }
}

export default ServicosUsuario;
