import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Menu from './pages/Menu';
import Home from './pages/Login';
import PrestadoresServico from './pages/PrestadoresServico';
import Clientes from './pages/Clientes';
import FormularioPrestadorServico from './componentes/FormularioPrestadorServico';
import InformacaoLogin from './componentes/InformacaoLogin';
import Analitico from './componentes/Analitico';

import UpdatePrestadorServico from './pages/UpdatePrestadorServico';
import UpdateFotosPrestadorServico from './pages/UpdateFotosPrestadorServico';
import Pagina404 from './pages/Pagina404';
import Authorized from './pages/Authorized';


const router = createBrowserRouter([
  {  path: '/login', element: <Home />, errorElement: <Pagina404/> },
  { path: '/', element: <Menu />, children: [
    { index:true, path: 'analitico', element: <Analitico/>},
    { path: 'prestadores-servicos', element: <PrestadoresServico /> },
    { path: 'clientes', element: <Clientes /> },
  ] },
 
  { path: '/prestador-servico/novo', name:"cadastro_novo_prestador_servico", element: <FormularioPrestadorServico /> },
  { path: '/prestador-servico/update/:id', element: <UpdatePrestadorServico/>},
  { path: '/authorized', element: <Authorized/>},
  { path: '/prestador-servico/fotos/update/:id', element: <UpdateFotosPrestadorServico/>}


]);

function App() {
  return (<div><InformacaoLogin></InformacaoLogin> <RouterProvider router={router} /></div>);
}

export default App;
