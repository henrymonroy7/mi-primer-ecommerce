import './Home.css';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

const Home = () => {   

    return (
        <>
            <div>
                <h1>Bienvenido</h1>
                <hr className="my-3" />
            </div>            
            <ItemListContainer />
        </>
    )

}

export default Home