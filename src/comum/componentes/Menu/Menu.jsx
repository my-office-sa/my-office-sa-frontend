import React, { useState, useRef, useEffect } from "react";
import "./Menu.css";
import { Link, useNavigate } from "react-router-dom";
import ServicoAutenticacao from "../../servicos/ServicoAutenticacao";
import Avatar from "../Avatar/Avatar";
import ServicosUsuario from "../../servicos/ServicosUsuario";

const instanciaServicoAutenticacao = new ServicoAutenticacao();


const Menu = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(false);
  const menuRef = useRef(null);
  const avatarRef = useRef(null); // Ref para o avatar
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const foraDoMenu = (event) => {
    // Fecha o menu se clicar fora do avatar ou do menu
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      avatarRef.current &&
      !avatarRef.current.contains(event.target)
    ) {
      setMenuAberto(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", foraDoMenu);
    return () => {
      document.removeEventListener("mousedown", foraDoMenu);
    };
  }, []);

  useEffect(() => {
    const usuarioEstaLogado = instanciaServicoAutenticacao.usuarioEstaLogado();
    setUsuarioAutenticado(usuarioEstaLogado);
  }, []);

  const fazerLogout = (event) => {
    event.preventDefault();
    instanciaServicoAutenticacao.logout();
    setUsuarioAutenticado(false);
    navigate("/");
  };

  return (
    <div className="menu-container" ref={menuRef}>
      {/* Se o usuário estiver logado, mostra o Avatar, senão, mostra o Menu */}
      {usuarioAutenticado ? (
        <div ref={avatarRef} onClick={toggleMenu}>
          <Avatar nome = {instanciaServicoAutenticacao.obterNomeUsuario()} />
        </div>
      ) : (
        <button className="menu-toggle" onClick={toggleMenu}>
          Menu
        </button>
      )}

      {/* Menu de navegação */}
      {usuarioAutenticado && menuAberto && (
        <ul className="menu-list open">
          <li className="menu-item">
            <Link to="/meu-perfil">Meu Perfil</Link>
          </li>
          <li className="menu-item">
            <Link to="/minhas-salas">Minhas Salas Cadastradas</Link>
          </li>
          <li className="menu-item">
            <Link to="/cadastro-sala">Cadastrar Sala</Link>
          </li>
          <li className="menu-item">
            <Link to="/" onClick={fazerLogout}>
              Logout
            </Link>
          </li>
        </ul>
      )}

      {/* Menu de login */}
      {!usuarioAutenticado && (
        <ul className={`menu-list ${menuAberto ? "open" : ""}`}>
          <li className="menu-item">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Menu;
