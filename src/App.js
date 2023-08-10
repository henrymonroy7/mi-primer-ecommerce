import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Componentes/NavBar/NavBar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';

function App() {
  return ( 
    <div className ="App">
      <NavBar/>
      <ItemListContainer greeting = "Bienvenidos"/>

    </div>        
  );
}

export default App;
