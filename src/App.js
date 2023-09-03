import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Componentes/NavBar/NavBar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import { ThemeProvider } from './Contexts/ThemeContext';
import Home from './Pages/Home';
import Footer from './Componentes/Footer/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting="Bienvenidos" />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='*' element={<h4>PÁGINA NO ENCONTRADA</h4>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </ThemeProvider >

  );
}

export default App;
