import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Componentes/NavBar/NavBar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';

function App() {
  return ( 
    <div className ="App">
      <NavBar/>
      <ItemListContainer greeting = "Bienvenidos"/>
      <ItemDetailContainer ></ItemDetailContainer>

    </div>        
  );
}

export default App;
