import "./Cabecalho.css";
import Menu from "../Menu/Menu"
import { Link } from "react-router-dom";

function Cabecalho() {
  return (
    <header className="cabecalho_root">
      <Link to="/" className="logo-container" >
      <img src="/logo.svg" className="logo"/>
      </Link>
     <Menu></Menu> 
    </header>
  );
}

export default Cabecalho;