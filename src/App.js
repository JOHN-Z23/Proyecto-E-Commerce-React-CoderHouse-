import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

//importamos los comp creados
import Ofertas from './diseño/ofertas';
import Contacto from './diseño/contacto';
import Productos from './diseño/productos';
import NavBarExample from './componentes/NavBar';

function App() {
  return (
    <div className="App">

<BrowserRouter>
<Routes>
  <Route path='/' element={ <NavBarExample /> }>
    <Route index element={ <Productos /> } />
    <Route path='ofertas' element={ <Ofertas /> } />
    <Route path='contacto' element={ <Contacto /> } />
    <Route path='*' element={ <Navigate replace to="/"/> }/>
  </Route>
</Routes> 
</BrowserRouter>

    </div>
  );
}

export default App;