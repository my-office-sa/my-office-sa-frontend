import Avatar from "../Avatar/Avatar";
import "./Cabecalho.css";
import Menu from "../Menu/Menu"

function Cabecalho() {
  return (
    <header className="cabecalho_root">
      <img src="/logo.svg" height={40} />
     <Menu></Menu> 
    </header>
  );
}

export default Cabecalho;