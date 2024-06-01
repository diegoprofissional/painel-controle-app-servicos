import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Menu from './pages/Menu';
import Home from './pages/Login';
import PrestadoresServico from './pages/PrestadoresServico';
import Clientes from './pages/Clientes';
import FormularioPrestadorServico from './componentes/FormularioPrestadorServico';
import UpdatePrestadorServico from './pages/UpdatePrestadorServico';
import UpdateFotosPrestadorServico from './pages/UpdateFotosPrestadorServico';

const router = createBrowserRouter([
  { path: '/menu', element: <Menu /> },
  { path: '/prestades-servico', element: <PrestadoresServico /> },
  { path: '/clientes', element: <Clientes /> },
  { path: '/', element: <Home /> },
  { path: '/prestador-servico/novo', element: <FormularioPrestadorServico /> },
  { path: '/prestador-servico/update/:id', element: <UpdatePrestadorServico/>},
  { path: '/prestador-servico/fotos/update/:id', element: <UpdateFotosPrestadorServico/>}


]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
