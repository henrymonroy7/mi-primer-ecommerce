import { Badge, Button, Offcanvas } from 'react-bootstrap'
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import './CartWidget.css';
import ThemeContext from '../../Contexts/ThemeContext';
import { useContext, useState } from 'react';

const CardWidget = () => {
    const { theme } = useContext(ThemeContext)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button bg={theme} variant={theme} className="custom-cart-widget" onClick={handleShow}>
                <FaShoppingCart className="custom-icon" />
                <Badge bg="danger" className="custom-badge">
                    0
                </Badge>
            </Button>
            <Offcanvas                
                className={`bg-${theme}`}
                show={show}
                onHide={handleClose}
                placement="end"
                scroll="true"
            >
                <Offcanvas.Header className={`bg-${theme}`}>
                    <Offcanvas.Title>Carrito de Compras</Offcanvas.Title>
                    <Button bg={theme} variant={theme} className={`btn-close-${theme}`} onClick={handleClose}>
                        <FaTimes/>
                    </Button>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    ¡Proximamente! Aquí podrá ver los items que el usuario ha agregado para comprar
                </Offcanvas.Body>
            </Offcanvas>
        </>


    )
}

export default CardWidget