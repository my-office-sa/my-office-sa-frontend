  import {
    createBrowserRouter,
    Link,
    RouterProvider,
  } from 'react-router-dom';
  import './App.css';
  import Rodape from './comum/componentes/Rodape/Rodape';
  import 'react-toastify/dist/ReactToastify.css';
  import VerificarAutenticacao from './comum/componentes/VerificarAutenticacao/VerificarAutenticacao';
  import PaginaLogin from './paginas/PaginaLogin/PaginaLogin';
  import PaginaInicial from './paginas/PaginaInicial/PaginaInicial';
  import PaginaAbout from './paginas/PaginaAbout/PaginaAbout';
  import PaginaServicos from './paginas/PaginaServicos/PaginaServicos';
  import PaginaContatos from './paginas/PaginaContatos/PaginaContatos';
  import PaginaNovoUsuario from './paginas/PaginaNovoUsuario/PaginaNovoUsuario';
  import PaginaCadastroSala from './paginas/PaginaCadastroSala/PaginaCadastroSala';
  import { ToastContainer } from 'react-toastify';
  import PaginaMinhasSalas from './paginas/PaginaMinhasSalas/PaginaMinhasSalas';
  import PaginaMeuPerfil from './paginas/PaginaMeuPerfil/PaginaMeuPerfil';
  import PaginaGoogleMaps from './paginas/PaginaGoogleMaps/PaginaGoogleMaps';
  import PaginaDetalhesSala from './paginas/PaginaDetalhesSala/PaginaDetalhesSala';
  import PaginaPoliticaDePrivacidade from './paginas/PaginaPoliticaDePrivacidade/PaginaPoliticaDePrivacidade';
  import PaginaTermoDeUso from './paginas/PaginaTermosDeUso/PaginaTermosDeUso';
  import PaginaTermosDeUso from './paginas/PaginaTermosDeUso/PaginaTermosDeUso';
import PaginaSeguranca from './paginas/PaginaSecurity/PaginaSecurity';

  const router = createBrowserRouter([
    {
      path: '',
      element: <PaginaInicial />,
    },
    {
      path: 'maps/:lat?/:long?',
      element: <PaginaGoogleMaps />,
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
      path: 'security',
      element: <PaginaSeguranca/>,
    },
    {
      path: 'novo-usuario',
      element: <PaginaNovoUsuario/>,
    },
    {
      path: 'detalhes-sala/:idSala',
      element: <PaginaDetalhesSala/>,
    },
    {
      path: 'politica-privacidade',
      element: <PaginaPoliticaDePrivacidade/>,
    },
    {
      path: 'termo-uso',
      element: <PaginaTermosDeUso/>,
    },
    {
      path: '',
      element: <VerificarAutenticacao />,
      children: [

    {
      path: 'cadastro-sala/:id?',
      element: <PaginaCadastroSala/>,
    },
    {
      path: 'minhas-salas',
      element: <PaginaMinhasSalas/>,
    },
    {
      path: 'meu-perfil',
      element: <PaginaMeuPerfil/>,
    },
  ]}
  ]);

  function App() {
    return (
      <>
        
        <RouterProvider router={router} />
        <Rodape />
        <ToastContainer />
      </>
    );
  }

  export default App;