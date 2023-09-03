import './Home.css';
import ItemListContainer from '../Componentes/ItemListContainer/ItemListContainer';
// import { Container, Button } from "react-bootstrap";

const Home = () => {
    const greeting = "Bienvenidos a E-Commerce";

    return (
        <>
            <ItemListContainer greeting={greeting}/>
            {/* <Container
                fluid
                className="p-0 home-container" // Aplica la clase "home-container"
            >
                <div
                    className="home-button-container" // Aplica la clase "home-button-container"
                >
                    <Button variant="primary" size="lg">
                        Botón de Inicio
                    </Button>
                </div>
            </Container> */}
        </>
    )

}

export default Home