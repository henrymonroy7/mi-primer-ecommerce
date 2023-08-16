import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Componentes/NavBar/NavBar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemCount from './Componentes/ItemCount/ItemCount';

function App() {
  return ( 
    <div className ="App">
      <NavBar/>
      <ItemListContainer greeting = "Bienvenidos"/>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada: ', quantity)} />

    </div>        
  );
}

export default App;
