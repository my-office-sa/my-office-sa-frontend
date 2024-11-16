class ServicosSalas {
    listar() {
        const salasDoLocalStorage = localStorage.getItem(
          'lista-salas'
        );
        if (salasDoLocalStorage) {
          return JSON.parse(salasDoLocalStorage);
        }
    
        return [];
      }
       

      cadastrarSala(novaSala) {
        const salasDoLocalStorage = this.listar();
        salasDoLocalStorage.push(novaSala);
        localStorage.setItem(
          'lista-salas',
          JSON.stringify(salasDoLocalStorage)
        );
      }

      editarSala(sala) {
        const salasDoLocalStorage = this.listar();
        const indexSala = salasDoLocalStorage.findIndex(
          (s) => s.id === +sala.id
        );
        salasDoLocalStorage[indexSala] = sala;
        localStorage.setItem(
          'lista-salas',
          JSON.stringify(salasDoLocalStorage)
        );
      }

      buscarSalaPorId(idSala) {
        const salasDoLocalStorage = this.listar();
        return salasDoLocalStorage.find(
          (s) => s.id === +idSala
        );
      }

      excluirSala(idSala) {
        const salasDoLocalStorage = this.listar();
    
        const listaDeSalasAtualizada = salasDoLocalStorage.filter(
          (s) => {
            return s.id !== idSala;
          }
        );
    
        localStorage.setItem(
          'lista-salas',
          JSON.stringify(listaDeSalasAtualizada)
        );
        return listaDeSalasAtualizada;
      }
    
}

export default ServicosSalas;