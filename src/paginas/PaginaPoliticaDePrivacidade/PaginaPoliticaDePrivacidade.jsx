import Principal from "../../comum/componentes/Principal/Principal";
import "./PaginaPoliticaDePrivacidade.css";

const PaginaPoliticaDePrivacidade = () => {
  const dataAtual = new Date();

  const dia = dataAtual.getDate();
  const mes = dataAtual.getMonth();

  const meses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];

  const mesNome = meses[mes];

  return (
    <Principal titulo="Política de Privacidade" voltarPara="/">
      <div className="politica_priv">
        <p>
          A My Office se compromete a proteger a privacidade de seus usuários.
          Esta Política de Privacidade descreve como coletamos, utilizamos,
          compartilhamos e protegemos as informações pessoais que você nos
          fornece ao utilizar nossos serviços de aluguel de salas de reunião.
        </p>
        <br />

        <h4>1. Quais informações coletamos?</h4>
        <p>
          <strong>Informações de cadastro:</strong> Nome, e-mail, número de
          telefone, endereço, dados de pagamento e informações de empresas.
          <br />
          <strong>Informações de uso:</strong> Histórico de reservas,
          preferências de salas, informações de login e dados de navegação.
          <br />
          <strong>Informações de dispositivos:</strong> Tipo de dispositivo,
          sistema operacional e navegador utilizados.
        </p>
        <br />

        <h4>2. Como utilizamos suas informações?</h4>
        <p>
          <strong>Processamento de reservas:</strong> Confirmar e gerenciar suas
          reservas, enviar lembretes e notificações.
          <br />
          <strong>Personalização:</strong> Oferecer recomendações de salas e
          serviços personalizados.
          <br />
          <strong>Comunicação:</strong> Enviar e-mails com novidades, promoções
          e informações relevantes.
          <br />
          <strong>Melhoria dos serviços:</strong> Analisar dados para melhorar a
          experiência do usuário e otimizar nossos serviços.
        </p>
        <br />

        <h4>3. Compartilhamento de informações</h4>
        <p>
          Não compartilhamos suas informações pessoais com terceiros, exceto nos
          seguintes casos:
          <br />
          <strong>Fornecedores de serviços:</strong> Podemos compartilhar seus
          dados com empresas que prestam serviços em nosso nome, como provedores
          de pagamento e plataformas de e-mail marketing.
          <br />
          <strong>Proteção de nossos direitos:</strong> Podemos divulgar suas
          informações se necessário para proteger nossos direitos ou os direitos
          de terceiros.
          <br />
          <strong>Obrigação legal:</strong> Podemos compartilhar suas
          informações se exigido por lei ou ordem judicial.
        </p>
        <br />

        <h4>4. Segurança das informações</h4>
        <p>
          Utilizamos medidas de segurança técnicas e administrativas para
          proteger suas informações pessoais contra acesso não autorizado,
          divulgação, alteração ou destruição.
        </p>
        <br />

        <h4>5. Cookies</h4>
        <p>
          Utilizamos cookies e tecnologias semelhantes para coletar informações
          sobre sua navegação e personalizar sua experiência. Você pode
          configurar seu navegador para bloquear cookies, mas isso pode afetar
          algumas funcionalidades do site.
        </p>
        <br />

        <h4>6. Alterações nesta política</h4>
        <p>
          Podemos atualizar esta Política de Privacidade periodicamente. As
          alterações serão publicadas em nosso site e a data da última
          atualização será indicada.
        </p>
        <br />

        <h4>7. Contato</h4>
        <p>
          Para dúvidas ou solicitações relacionadas a esta Política de
          Privacidade, entre em contato conosco através do e-mail myoffice.
        </p>
        <br />

        <h4>Compromisso com a privacidade</h4>
        <p>
          A My Office valoriza sua privacidade e se compromete a tratar suas
          informações pessoais com cuidado e responsabilidade.
        </p>
        <br />
        <strong>
          Última atualização: {dia} de {mesNome} de 2024
        </strong>
      </div>
    </Principal>
  );
};

export default PaginaPoliticaDePrivacidade;
