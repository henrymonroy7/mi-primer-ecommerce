import './Home.css';
import ItemListContainer from '../../Componentes/ItemListContainer/ItemListContainer';

const Home = () => {
    const greeting = "Bienvenidos a E-Commerce";

    return (
        <>
            <ItemListContainer greeting={greeting}/>
        </>
    )

}

export default Home