import React, { useState, useRef, useEffect } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

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

  return (
    <div className="menu-container" ref={menuRef}>
      <button className="menu-toggle" onClick={toggleMenu}>
        Menu
      </button>
    
      <ul className={`menu-list ${isMenuOpen ? 'open' : ''}`}>
        <li className="menu-item">
        <Link to='/'>Home</Link>
        </li>
        <li className="menu-item">
          <Link to='/about'>Sobre Nós</Link>
        </li>
        <li className="menu-item">
        <Link to='/servicos'>Serviços</Link>
        </li>
        <li className="menu-item">
        <Link to='/contatos'>Contato</Link>
        </li>
        <li className="menu-item">
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
