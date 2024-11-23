import Principal from "../../comum/componentes/Principal/Principal";
import './PaginaTermosDeUso.css';

const PaginaTermosDeUso = () => {

  return (
    <Principal titulo="Termo de Uso" voltarPara="/">
    <div className="termo-uso">
        <h4>1. Introdução</h4>
        <p>
          Este Termo de Uso ("Termo") estabelece as condições gerais para o uso da plataforma My Office ("Plataforma"), um serviço online que conecta usuários a espaços para realização de reuniões. Ao acessar e utilizar a Plataforma, o usuário ("Usuário") concorda expressamente com todos os termos e condições aqui estabelecidos.
        </p><br />

        <h4>2. Definições</h4>
        <p>
          <strong>My Office:</strong> Refere-se ao site e aplicativo da plataforma My Office, incluindo todos os seus recursos e funcionalidades.
          <br />
          <strong>Usuário:</strong> Qualquer pessoa física ou jurídica que se cadastre e utilize a Plataforma.
          <br />
          <strong>Anfitrião:</strong> Usuário que oferece espaços para locação na Plataforma.
          <br />
          <strong>Convidado:</strong> Usuário que busca alugar um espaço na Plataforma.
        </p><br />

        <h4>3. Cadastro e Uso da Plataforma</h4>
        <p>
          <strong>Cadastro:</strong> Para utilizar a Plataforma, o Usuário deverá se cadastrar, fornecendo informações precisas e completas.
          <br />
          <strong>Responsabilidade:</strong> O Usuário é responsável por manter suas informações de cadastro atualizadas.
          <br />
          <strong>Uso Proibido:</strong> É proibido utilizar a Plataforma para fins ilegais, fraudulentos ou que violem os direitos de terceiros.
        </p><br />

        <h4>4. Serviços Oferecidos</h4>
        <p>
          A My Office oferece uma plataforma online para que Anfitriões possam anunciar seus espaços e Convidados possam encontrar e reservar espaços para reuniões. A My Office não é proprietária dos espaços anunciados e não garante a qualidade dos serviços prestados pelos Anfitriões.
        </p><br />

        <h4>5. Reservas e Pagamentos</h4>
        <p>
          <strong>Reservas:</strong> As reservas são realizadas diretamente entre o Anfitrião e o Convidado, mediante os termos e condições acordados por ambas as partes.
          <br />
          <strong>Pagamentos:</strong> A My Office pode intermediar os pagamentos, cobrando uma taxa de serviço. As formas de pagamento e os valores serão informados no momento da reserva.
        </p><br />

        <h4>6. Responsabilidade</h4>
        <p>
          <strong>Anfitriões:</strong> Os Anfitriões são responsáveis pela qualidade dos espaços oferecidos e pela prestação dos serviços.
          <br />
          <strong>Convidados:</strong> Os Convidados são responsáveis pelo uso adequado dos espaços e pela observância das regras estabelecidas pelos Anfitriões.
          <br />
          <strong>My Office:</strong> A My Office atua como uma plataforma de conexão e não se responsabiliza pelos danos causados por qualquer das partes envolvidas em uma reserva.
        </p><br />

        <h4>7. Propriedade Intelectual</h4>
        <p>
          Todos os direitos de propriedade intelectual sobre a My Office, incluindo marcas, logotipos e conteúdo, pertencem à [Nome da Empresa Proprietária da Plataforma].
        </p><br />

        <h4>8. Alterações no Termo de Uso</h4>
        <p>
          A My Office se reserva o direito de alterar este Termo de Uso a qualquer momento. As alterações serão publicadas na Plataforma e entrarão em vigor a partir da data de sua publicação.
        </p><br />

        <h4>9. Lei Aplicável e Foro</h4>
        <p>
          Este Termo de Uso será regido e interpretado de acordo com as leis brasileiras. Qualquer disputa será submetida ao foro da comarca de [Cidade].
        </p><br />

        <h4>10. Contato</h4>
        <p>
          Para entrar em contato conosco, utilize o seguinte endereço de e-mail: [Endereço de e-mail].
        </p><br />

        <strong>Última atualização: 23 de novembro de 2024</strong>
      </div>
    </Principal>
  );
};

export default PaginaTermosDeUso;
