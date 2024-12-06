import instanciaApi from "./Api";

class ServicosUsuario {
  async listar() {
    const salasApi = await instanciaApi.get("/usuarios");
    return salasApi;
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

  async buscarPorId(idUsuario) {
    const donoSala = await this.listar();
    return donoSala.data.find((u) => u.id_usuario === +idUsuario);
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
