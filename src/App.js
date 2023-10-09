import Carrousel from './Components/Carrousel';
import Layout from './Components/Layout';
import Home from './Components/Home';
import Informacion from './Components/Informacion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Asegúrate de importar los componentes necesarios para el enrutamiento
import Login from './LoginPage';
import UsuarioProvider from './context/ContextUsuario';
import Perfil from './Components/Perfil';

function App() {
  return (
    <UsuarioProvider>
      <BrowserRouter>
      <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/' element={<Layout />}> {/* Esta siempre */}
          <Route index element={<Home />}></Route> {/* Index */}
          <Route path='/informacion' element={<Informacion />} ></Route>
          <Route path='*' element={<h1>Not Found</h1>} ></Route>
          <Route path='/perfil' element={<Perfil />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </UsuarioProvider>
  );
}

export default App;
