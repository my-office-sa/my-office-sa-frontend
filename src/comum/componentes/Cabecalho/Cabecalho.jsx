import Avatar from "../Avatar/Avatar";
import "./Cabecalho.css";
import Menu from "../Menu/Menu"
import { Link } from "react-router-dom";

function Cabecalho() {
  return (
    <header className="cabecalho_root">
      <Link to="/">
      <img src="/logo.svg" height={10}/>
      </Link>
     <Menu></Menu> 
    </header>
  );
}

export default Cabecalho;