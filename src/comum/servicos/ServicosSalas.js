import instanciaApi from "./Api";

class ServicosSalas {
  listar() {
    const salasDoLocalStorage = localStorage.getItem("lista-salas");
    if (salasDoLocalStorage) {
      return JSON.parse(salasDoLocalStorage);
    }

    return [];
  }

  cadastrarSala(sala) {
    return instanciaApi.post("/salas", sala);
  }

  editarSala(sala) {
    return instanciaApi.put("/salas", sala);
  }

  buscarSalaPorId(idSala) {
    const salasDoLocalStorage = this.listar();
    return salasDoLocalStorage.find((s) => s.id === +idSala);
  }

  excluirSala(idSala) {
    const salasDoLocalStorage = this.listar();

    const listaDeSalasAtualizada = salasDoLocalStorage.filter((s) => {
      return s.id !== idSala;
    });

    localStorage.setItem("lista-salas", JSON.stringify(listaDeSalasAtualizada));
    return listaDeSalasAtualizada;
  }
}

export default ServicosSalas;
