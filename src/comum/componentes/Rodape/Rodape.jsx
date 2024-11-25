import './Rodape.css';

function Rodape() {

  return (
    <footer className="rodape_root">
      <h6>
          <p>@{new Date().getFullYear()} MyOffice. All rigth reserved.</p>
      </h6>
    </footer>
  );
}

export default Rodape;