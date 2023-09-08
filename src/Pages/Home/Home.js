import './Home.css';
import ItemListContainer from '../../Componentes/ItemListContainer/ItemListContainer';

const Home = () => {
    const greeting = "Bienvenidos a E-Commerce";

    return (
        <>
        <p>Lista de tareas: configurar firestore</p>
            <ItemListContainer greeting={greeting}/>
        </>
    )

}

export default Home