import "./FooterResponsivo.css";

const FooterResponsivo = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section company">
          <h4>Company</h4>
          <ul>
            <li><a href="/servicos">Serviços</a></li>
            <li><a href="/about">Quem somos</a></li>
            <li><a href="/contatos">Contatos</a></li>
          </ul>
        </div>

        <div className="footer-section social-media">
          <h4>Redes Sociais</h4>
          <div className="social-icons">
            <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
              <img src="/whatsapp.png" alt="WhatsApp" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/instagran.png" alt="Instagram" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-links">
          <a href="/termo-uso">Termos e Condições</a>
          <a href="/politica-privacidade">Política de Privacidade</a>
          <a href="/security">Políticas de Segurança</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterResponsivo;
