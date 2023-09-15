import './Home.css';
import ItemListContainer from '../../Componentes/ItemListContainer/ItemListContainer';

const Home = () => {   

    return (
        <>
            <div className='deboCrearla-header'>
                <h1>Bienvenido a fakE-Commerce</h1>
            </div>
            <ItemListContainer />
        </>
    )

}

export default Home