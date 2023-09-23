import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Home from './components/Home/Home';
import { ThemeProvider } from './contexts/ThemeContext';
import { CartProvider } from './contexts/CartContext';
import Footer from './components/Footer/Footer';
import { Container } from 'react-bootstrap';
import Cart from './components/Cart/Cart';

function App() {

  return (
    <ThemeProvider>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <div className="myApp">
            <Container>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/category/:categoryId' element={<ItemListContainer/>} />
                <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                <Route path='/payment' element={<Cart/>} />
                <Route path='*' element={<h4>PÁGINA NO ENCONTRADA</h4>} />
              </Routes>
            </Container>
          </div>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider >

  );
}

export default App;
