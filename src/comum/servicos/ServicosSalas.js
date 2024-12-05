import instanciaApi from "./Api";

class ServicosSalas {
  async listar() {
    const salasApi = await instanciaApi.get("/salas");
    return salasApi;
  }
  async listarMinhasSalas() {
    const minhasSalasApi = await instanciaApi.get("/minhas-salas");
    return minhasSalasApi;
  }

  cadastrarSala(sala) {
    return instanciaApi.post("/salas", sala);
  }

  editarSala(sala) {
    return instanciaApi.put("/salas", sala);
  }

  async buscarSalaPorId(idSala) {
    const salasApi = await this.listar();
    return salasApi.data.find((s) => s.id_sala === +idSala);
  }

  excluirSala(idSala) {
    return instanciaApi.delete(`/salas/${idSala}`);
  }
}

export default ServicosSalas;
