import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './App.css';
import Rodape from './comum/componentes/Rodape/Rodape';

import PaginaLogin from './paginas/PaginaLogin/PaginaLogin';
import PaginaInicial from './paginas/PaginaInicial/PaginaInicial';
import PaginaAbout from './paginas/PaginaAbout/PaginaAbout';
import PaginaServicos from './paginas/PaginaServicos/PaginaServicos';
import PaginaContatos from './paginas/PaginaContatos/PaginaContatos';
import PaginaNovoUsuario from './paginas/PaginaNovoUsuario/PaginaNovoUsuario';

const router = createBrowserRouter([
  {
    path: '',
    element: <PaginaInicial />,
  },
  {
    path: 'login',
    element: <PaginaLogin />,
  },
  {
    path: 'about',
    element: <PaginaAbout/>,
  },
  {
    path: 'servicos',
    element: <PaginaServicos/>,
  },
  {
    path: 'contatos',
    element: <PaginaContatos/>,
  },
  {
    path: 'novo-usuario',
    element: <PaginaNovoUsuario/>,
  },
]);

function App() {
  return (
    <>
      
      <RouterProvider router={router} />
      <Rodape />
    </>
  );
}

export default App;