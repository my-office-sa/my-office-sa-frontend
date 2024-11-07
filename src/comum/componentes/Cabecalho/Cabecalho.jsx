import Avatar from "../Avatar/Avatar";
import "./Cabecalho.css";
import Menu from "../Menu/Menu"

function Cabecalho() {
  return (
    <header className="cabecalho_root">
      <img src="/vite.svg" height={40} />
     <Menu></Menu> 
    </header>
  );
}

export default Cabecalho;