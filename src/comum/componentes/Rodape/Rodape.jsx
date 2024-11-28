import './Rodape.css';

function Rodape() {

  return (
    <footer className="rodape_root">
      <h6>
          <p>@{new Date().getFullYear()} MyOffice - Soluções práticas para suas reuniões, em qualquer lugar.</p>
      </h6>
    </footer>
  );
}

export default Rodape;