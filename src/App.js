import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Componentes/NavBar/NavBar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import { ThemeProvider } from './Contexts/ThemeContext';
import Home from './Pages/Home/Home';
import Footer from './Componentes/Footer/Footer';
import { Container } from 'react-bootstrap';

function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
        <NavBar />
        <div className="myApp">
          <Container>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/category/:categoryId' element={<ItemListContainer greeting="Nombre categoría" />} />
              <Route path='/item/:itemId' element={<ItemDetailContainer />} />
              <Route path='*' element={<h4>PÁGINA NO ENCONTRADA</h4>} />
            </Routes>
          </Container>
        </div>
        <Footer />
      </BrowserRouter>

    </ThemeProvider >

  );
}

export default App;
