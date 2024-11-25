import Principal from "../../comum/componentes/Principal/Principal";
import './PaginaServicos.css';

const PaginaServicos = () => {
  return (
    <Principal titulo="Nossos Serviços" voltarPara="/">
      <div className="servicos_page">
        <h1>Transforme seus negócios com nossos serviços</h1>
        <p>
          A My Office é mais do que um simples local de aluguel de espaços. Oferecemos uma plataforma inovadora que conecta você às melhores soluções de ambientes para reuniões, eventos e trabalho colaborativo. Se você busca flexibilidade, tecnologia de ponta e um ambiente profissional, temos o que você precisa.
        </p>

        <section>
          <h4>1. Aluguel de Salas de Reunião</h4>
          <p>
            Nossas salas de reunião são ideais para encontros empresariais, conferências e sessões de brainstorming. Com ambientes projetados para promover produtividade, você encontrará o espaço perfeito para qualquer tipo de reunião, seja com pequenos ou grandes grupos.
          </p>
          <ul>
            <li>Equipamentos audiovisuais de última geração.</li>
            <li>Ambientes modernos e confortáveis para diversas configurações.</li>
            <li>Opções personalizadas de coffee break e serviços de alimentação.</li>
          </ul>
        </section>

        <section>
          <h4>2. Espaços para Eventos Corporativos</h4>
          <p>
            Se você está planejando um evento corporativo de grande porte, como workshops, seminários ou treinamentos, temos a infraestrutura ideal para o seu sucesso. Nossos espaços são adaptáveis, modernos e oferecem toda a flexibilidade para personalizar o ambiente conforme suas necessidades.
          </p>
          <ul>
            <li>Salas de diferentes tamanhos, adequadas a qualquer tipo de evento.</li>
            <li>Suporte técnico e assistência completa durante o evento.</li>
            <li>Equipamentos de áudio, vídeo e apresentação de alta qualidade.</li>
          </ul>
        </section>

        <section>
          <h4>3. Escritórios Compartilhados</h4>
          <p>
            Se você precisa de um espaço profissional para trabalhar de forma eficiente e conectada, nossos escritórios compartilhados são a escolha ideal. Com todas as comodidades de um escritório moderno, você poderá focar no seu trabalho enquanto aproveita a flexibilidade que um espaço compartilhado proporciona.
          </p>
          <ul>
            <li>Internet de alta velocidade e infraestrutura completa.</li>
            <li>Espaços privados para chamadas ou tarefas concentradas.</li>
            <li>Ambientes colaborativos que incentivam o networking e a troca de ideias.</li>
          </ul>
        </section>

        <section>
          <h4>4. Serviços Adicionais Exclusivos</h4>
          <p>
            Na My Office, oferecemos mais do que apenas espaços para reunião. Com nossos serviços adicionais, você pode transformar qualquer evento ou reunião em uma experiência de alto nível.
          </p>
          <ul>
            <li>Serviços de recepção e suporte administrativo.</li>
            <li>Locação de equipamentos tecnológicos para apresentações de impacto.</li>
            <li>Serviços exclusivos de catering, coffee break e refeições.</li>
          </ul>
        </section>

        <section>
          <h4>Por que escolher a My Office?</h4>
          <p>
            Escolher a My Office é optar por um ambiente de negócios de alta qualidade. Nossos espaços são modernos, bem localizados e projetados para maximizar sua produtividade. Além disso, você conta com a flexibilidade de agendar conforme sua conveniência e todo o suporte necessário para garantir o sucesso da sua reunião ou evento.
          </p>
          <ul>
            <li>Espaços bem localizados, com fácil acesso e infraestrutura de qualidade.</li>
            <li>Flexibilidade total para agendar conforme sua agenda, seja de última hora ou com antecedência.</li>
            <li>Suporte completo antes, durante e após seu evento ou reunião, para que você possa se concentrar no que realmente importa.</li>
          </ul>
        </section>

        <h4>Estamos prontos para apoiar o seu sucesso!</h4>
        <p>
          Se você está buscando um espaço para impulsionar sua reunião, evento ou projeto, a My Office tem a solução ideal para você. Explore nossos serviços e reserve o seu espaço hoje mesmo.
        </p>
      </div>
    </Principal>
  );
};

export default PaginaServicos;
