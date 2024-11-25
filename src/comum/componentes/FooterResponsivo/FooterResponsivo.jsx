import "./FooterResponsivo.css";

const FooterResponsivo = () => {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <h4>Company</h4>
            <a href="/servicos">
              <p>Serviços</p>
            </a>
            <a href="/about">
              <p>Quem somos</p>
            </a>
            <a href="/contatos">
              <p>Contatos</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Redes Sociais</h4>
            <div className="socialmedia">
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

        <hr />

        <div className="sb__footer-below">
          <div className="sb__footer-below-links">
            <a href="/termo-uso">
              <p>Termos e Condições</p>
            </a>
            <a href="/politica-privacidade">
              <p>Políticas e Privacidade</p>
            </a>
            <a href="/security">
              <p>Políticas de segurança</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterResponsivo;
