import Principal from "../../comum/componentes/Principal/Principal";
import "./PaginaSecurity.css";

const PaginaSeguranca = () => {
  return (
    <Principal titulo="Nossa Política de Segurança" voltarPara="/">
      <div className="seguranca_page">
        <h1>Compromisso com sua Segurança</h1>
        <p>
          Na My Office, a segurança dos dados de nossos usuários é uma das
          nossas principais prioridades. Adotamos uma série de medidas para
          garantir que suas informações pessoais e financeiras estejam sempre
          protegidas. Confira abaixo como mantemos sua segurança em cada etapa
          da sua experiência conosco.
        </p>

        <section>
          <h4>1. Proteção de Dados Pessoais</h4>
          <p>
            Respeitamos a privacidade de nossos usuários e garantimos que todos
            os dados pessoais sejam tratados de acordo com as melhores práticas
            de segurança. Nossos sistemas são projetados para proteger suas
            informações contra acesso não autorizado, alteração, divulgação ou
            destruição.
          </p>
          <ul>
            <li>Criptografia de dados em todas as transações.</li>
            <li>Armazenamento seguro de dados sensíveis.</li>
            <li>Controle rigoroso de acessos à base de dados.</li>
          </ul>
        </section>

        <section>
          <h4>2. Conformidade com Regulamentações</h4>
          <p>
            Estamos em conformidade com as regulamentações de proteção de dados
            pessoais, incluindo a Lei Geral de Proteção de Dados (LGPD) no
            Brasil. Isso significa que seguimos práticas transparentes para
            coletar, armazenar e processar dados, sempre respeitando os direitos
            de nossos usuários.
          </p>
        </section>

        <section>
          <h4>3. Segurança nas Transações Financeiras</h4>
          <p>
            Para garantir a segurança em todos os pagamentos e transações
            financeiras realizados em nossa plataforma, trabalhamos com as
            tecnologias de pagamento mais avançadas e adotamos protocolos de
            segurança, como a criptografia SSL, para proteger suas informações
            bancárias.
          </p>
          <ul>
            <li>Certificado SSL para transações seguras.</li>
            <li>Monitoramento constante de atividades suspeitas.</li>
            <li>
              Integração com sistemas de pagamento confiáveis e certificados.
            </li>
          </ul>
        </section>

        <section>
          <h4>4. Monitoramento Contínuo</h4>
          <p>
            Mantemos um sistema de monitoramento contínuo em nossa
            infraestrutura para detectar e responder rapidamente a qualquer
            atividade suspeita. Temos uma equipe de especialistas em segurança
            dedicados a garantir a proteção de nossos sistemas e dados.
          </p>
        </section>

        <section>
          <h4>5. Educação e Treinamento em Segurança</h4>
          <p>
            A segurança é uma responsabilidade compartilhada. Por isso,
            realizamos treinamentos regulares com nossa equipe para garantir que
            todos estejam atualizados com as melhores práticas de segurança e
            privacidade. Isso inclui a conscientização sobre phishing, proteção
            de dados e práticas seguras de senha.
          </p>
        </section>

        <h4>Por que confiar na My Office?</h4>
        <p>
          Ao escolher a My Office, você pode ter certeza de que estamos
          comprometidos em proteger suas informações pessoais e garantir uma
          experiência segura. Nossa prioridade é proporcionar um ambiente de
          trabalho seguro, tanto para os usuários quanto para os anfitriões da
          plataforma.
        </p>
        <ul>
          <li>Ambiente protegido com tecnologia de ponta.</li>
          <li>Transparência no uso de dados pessoais.</li>
          <li>
            Suporte dedicado para resolver qualquer problema relacionado à
            segurança.
          </li>
        </ul>
      </div>
    </Principal>
  );
};

export default PaginaSeguranca;
