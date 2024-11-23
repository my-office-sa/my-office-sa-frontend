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
              <p>
                <img src="/whatsapp.png"  alt="" />
              </p>
              <p>
                <img src="instagran.png"  alt="" />
              </p>
              <p>
                <img src="linkedin.png" alt="" />
              </p>
              <p>
                <img  alt="" />
              </p>
            </div>
          </div>
        </div>

        <hr></hr>

        <div className="sb__footer-below">
          <div className="sb__footer-below-links">
            <a><div><p>Terms & Conditions</p></div></a>
            <a><div><p>Privacy</p></div></a>
            <a><div><p>Security</p></div></a>
            <a><div><p>Cookie Declaration</p></div></a>
          </div>
        </div>
          <div className="sb__footer-copyrigth">
            <p>@{new Date().getFullYear()} MyOffice. All rigth reserved.</p>
          </div>
      </div>
    </div>
  );
};

export default FooterResponsivo;
