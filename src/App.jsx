import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './App.css';
import Cabecalho from './comum/componentes/Cabecalho/Cabecalho';
import Rodape from './comum/componentes/Rodape/Rodape';

import PaginaLogin from './paginas/PaginaLogin/PaginaLogin';
import PaginaInicial from './paginas/PaginaInicial/PaginaInicial';

const router = createBrowserRouter([
  {
    path: '',
    element: <PaginaInicial />,
  },
  {
    path: 'login',
    element: <PaginaLogin />,
  },
]);

function App() {
  return (
    <>
      <Cabecalho />
      <RouterProvider router={router} />
      <Rodape />
    </>
  );
}

export default App;