import Principal from "../../comum/componentes/Principal/Principal";
import './PaginaAbout.css';

const PaginaAbout = () => {
  return (
    <Principal titulo={"Quem somos"} voltarPara="/">
      <div className="about_page">
        <p>
          A My Office é uma plataforma inovadora que oferece soluções flexíveis para reservas de espaços de trabalho, salas de reunião e eventos corporativos. Nossa missão é transformar a maneira como profissionais e empresas encontram e utilizam espaços para suas necessidades, proporcionando conveniência, eficiência e qualidade.
        </p>

        <section>
          <h4>Missão</h4>
          <p>
            Nossa missão é proporcionar aos nossos clientes um ambiente profissional de alto padrão, com facilidade de acesso e recursos modernos para otimizar suas reuniões, eventos e atividades corporativas. Estamos comprometidos em oferecer um serviço de excelência, garantindo que cada experiência com a My Office seja única e produtiva.
          </p>
        </section>

        <section>
          <h4>Visão</h4>
          <p>
            Nossa visão é ser reconhecida como a plataforma líder em soluções de espaços de trabalho flexíveis e serviços corporativos, sendo a escolha preferencial de profissionais e empresas ao redor do mundo, por meio da inovação e da qualidade em nossos serviços.
          </p>
        </section>

        <section>
          <h4>Valores</h4>
          <ul>
            <li><strong>Inovação:</strong> Buscamos sempre a inovação para oferecer soluções que atendam às necessidades do mercado.</li>
            <li><strong>Qualidade:</strong> Garantimos qualidade em todos os aspectos dos nossos serviços, desde o atendimento até os espaços oferecidos.</li>
            <li><strong>Flexibilidade:</strong> Entendemos as demandas do mundo corporativo e oferecemos flexibilidade em nossos serviços para atender cada cliente da melhor maneira possível.</li>
            <li><strong>Confiança:</strong> A confiança é a base de todas as nossas relações com clientes, fornecedores e parceiros.</li>
            <li><strong>Sustentabilidade:</strong> A My Office se compromete a atuar de forma responsável, com práticas que respeitam o meio ambiente e promovem a sustentabilidade.</li>
          </ul>
        </section>

        <section>
          <h4>Equipe</h4>
          <p>
            Nossa equipe é formada por profissionais experientes e dedicados, que trabalham com paixão para entregar a melhor experiência para nossos usuários. Desde a gestão da plataforma até o atendimento ao cliente, cada membro da My Office está focado em proporcionar soluções eficazes e de alta qualidade.
          </p>
        </section>

        <h4>Por que escolher a My Office?</h4>
        <p>
          Se você está buscando flexibilidade, qualidade e inovação, a My Office é a escolha certa para o seu negócio. Nossa plataforma oferece uma gama de opções que se adaptam às necessidades de profissionais e empresas de diferentes portes e setores, com um foco constante em excelência e eficiência.
        </p>
      </div>
    </Principal>
  );
};

export default PaginaAbout;
