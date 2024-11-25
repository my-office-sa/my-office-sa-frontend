import Principal from "../../comum/componentes/Principal/Principal";
import './PaginaContatos.css';

const PaginaContatos = () => {
  return (
    <Principal titulo={"Entre em contato conosco"} voltarPara="/">
      <div className="contatos_page">
        <p>
          Estamos aqui para ajudar! Se você tiver alguma dúvida, sugestão ou precisar de assistência, não hesite em nos contatar. Abaixo você encontrará as diversas formas de entrar em contato com nossa equipe.
        </p>

        <section>
          <h4>Formulário de Contato</h4>
          <p>
            Preencha o formulário abaixo e nossa equipe entrará em contato o mais breve possível:
          </p>
          <form className="form-contato">
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" placeholder="Seu nome" required />

            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" placeholder="Seu e-mail" required />

            <label htmlFor="mensagem">Mensagem:</label>
            <textarea id="mensagem" name="mensagem" placeholder="Sua mensagem" required></textarea>

            <button type="submit" className="btn-submit">Enviar</button>
          </form>
        </section>

        <section>
          <h4>Informações de Contato</h4>
          <p>Você também pode nos contatar diretamente através dos seguintes canais:</p>
          <ul>
            <li>
              <strong>Email:</strong> <a href="mailto:contato@myoffice.com">contato@myoffice.com</a>
            </li>
            <li>
              <strong>Telefone:</strong> <a href="tel:+55(48)123456789">(48) 1234-5678</a>
            </li>
            <li>
              <strong>Endereço:</strong> Saco Grande, 3730, Florianópolis - SC, 88032-005
            </li>
          </ul>
        </section>

        <section>
          <h4>Redes Sociais</h4>
          <p>Conecte-se conosco nas redes sociais:</p>
          <ul className="social-links">
            <li><a href="https://facebook.com/myoffice" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com/myoffice" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://linkedin.com/company/myoffice" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </section>
      </div>
    </Principal>
  );
};

export default PaginaContatos;
