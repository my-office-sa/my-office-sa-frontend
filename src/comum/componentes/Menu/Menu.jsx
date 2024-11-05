import React, { useState } from 'react';
import './Menu.css';  // Arquivo CSS externo para estilos, se necessário
import Principal from '../Principal/Principal';
import { Link } from 'react-router-dom'

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
          <a href="#home">Home</a>
        </li>
        <li className="menu-item">
          <a href="#about">Sobre</a>
        </li>
        <li className="menu-item">
          <a href="#services">Serviços</a>
        </li>
        <li className="menu-item">
          <a href="#contact">Contato</a>
        </li>
        <li className="menu-item">
          <a href="#login" >Login</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
