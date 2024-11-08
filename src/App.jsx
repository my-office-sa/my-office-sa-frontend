import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './App.css';
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
      
      <RouterProvider router={router} />
      <Rodape />
    </>
  );
}

export default App;