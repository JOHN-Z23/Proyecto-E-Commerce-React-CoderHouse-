import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBarExample from './componentes/NavBar';
import Contacto from './diseño/contacto';
import ItemCount from './diseño/ItemCount';
import ItemListContainer from './diseño/ItemListContainer';
import Ofertas from './diseño/ofertas';

function App() {

  const onAdd = (count) => {
  alert("Agregaste al carrito");
  }

  return (
    <div className="App">

<BrowserRouter>
<Routes>
  <Route path='/' element={ <NavBarExample /> }>
    <Route index element={ <>
    <ItemListContainer greeting={'Productos de Ferre Global'}/> 
    <ItemCount inicial={1} max={10} onAdd={onAdd} />
    </>} />
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