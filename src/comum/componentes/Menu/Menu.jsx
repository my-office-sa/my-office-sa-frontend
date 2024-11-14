import React, { useState, useRef, useEffect } from 'react';
import './Menu.css';
import { Link, useNavigate } from 'react-router-dom';
import ServicoAutenticacao from '../../servicos/ServicoAutenticacao';

const instanciaServicoAutenticacao = new ServicoAutenticacao();

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);  // Usando useState diretamente
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Verificando se o usuário está logado
    const usuarioEstaLogado = instanciaServicoAutenticacao.usuarioEstaLogado();
    setIsAuthenticated(usuarioEstaLogado);
  }, []); // Apenas quando o componente for montado

  const fazerLogout = (event) => {
    event.preventDefault();  // Impede o comportamento padrão de link
    instanciaServicoAutenticacao.logout();  // Chama a função de logout
    setIsAuthenticated(false);  // Atualiza o estado de autenticação
    navigate('/');  // Redireciona para a página inicial (ou qualquer outra página desejada)
  };

  return (
    <div className="menu-container" ref={menuRef}>
      <button className="menu-toggle" onClick={toggleMenu}>
        Menu
      </button>

      <ul className={`menu-list ${isMenuOpen ? 'open' : ''}`}>
        {!isAuthenticated ? (
          <li className="menu-item">
            <Link to="/login">Login</Link>
          </li>
        ) : (
          <>
            <li className="menu-item">
              <Link to="/cadastro-sala">Cadastrar Sala</Link>
            </li>
            <li className="menu-item">
              <Link to="/minhas-salas">Minhas Salas Cadastradas</Link>
            </li>
            <li className="menu-item">
              <Link to="/" onClick={fazerLogout}>Logout</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Menu;
