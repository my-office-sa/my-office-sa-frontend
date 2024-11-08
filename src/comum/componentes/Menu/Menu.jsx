import React, { useState } from 'react';
import './Menu.css';  // Arquivo CSS externo para estilos, se necessário
import { Link } from 'react-router-dom';

const Menu = () => {
  // Usando o hook useState para controlar o estado do menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar o menu (abrir e fechar)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (

    <div className="menu-container">
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? 'Fechar Menu' :'Menu'}
      </button>

      {/* Lista de itens do menu que será exibida dependendo do estado */}
      <ul className={`menu-list ${isMenuOpen ? 'open' : ''}`}>
        <li className="menu-item">
        <Link to='/'>Home</Link>
        </li>
        <li className="menu-item">
        <Link to='/novo-usuario'>Cadastro</Link>
        </li>
        <li className="menu-item">
          <Link to='/login'>Login</Link>
        </li>
        <li className="menu-item">
        <Link to='/servicos'>Serviços</Link>
        </li>
        <li className="menu-item">
        <Link to='/contatos'>Contato</Link>
        </li>
        <li className="menu-item">
          <Link to='/about'>Sobre Nós</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
