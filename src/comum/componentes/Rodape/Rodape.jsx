import { Link } from 'react-router-dom';
import './Rodape.css';

function Rodape() {
  const anoAtual = new Date().getFullYear();
  return (
    <footer className="rodape_root">   

      <div className="rodape_informacoes">
        <p><strong>MyOffice {anoAtual}</strong></p>
        <p>Soluções práticas para suas reuniões, em qualquer lugar.</p>
      </div>
      <div className='rodape_links'>
        <a href="/about">Sobre Nós</a>
        <a href="/servicos">Nossos Serviços</a>
        <a href="/contatos">Contato</a>
      </div>
      <div className="rodape_redes_sociais">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>
      <div className="rodape_links">
      <a href="/politica-privacidade">Política de Privacidade</a>
      <a href="/termo-uso">Termos de Uso</a>
      </div>
    </footer>
  );
}

export default Rodape;