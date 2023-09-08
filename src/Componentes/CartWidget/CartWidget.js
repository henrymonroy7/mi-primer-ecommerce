import { Badge, Button, Offcanvas, ListGroup, Figure, Col, Row } from 'react-bootstrap'
import { FaShoppingCart, FaTimes, FaTrashAlt } from "react-icons/fa";
import './CartWidget.css';
import ThemeContext from '../../Contexts/ThemeContext';
import CartContext from '../../Contexts/CartContext';
import { useContext, useState } from 'react';


const CardWidget = () => {
    const { theme } = useContext(ThemeContext)
    const { purchases, total } = useContext(CartContext)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const calculateFinalPrice = () => {
        return purchases.reduce((totalPrice, purch) => {
            return totalPrice + purch.item.price * purch.quantity;
        }, 0);
    };

    return (
        <>

            <Button bg={theme} variant={theme} className="custom-cart-widget" onClick={handleShow}>
                <FaShoppingCart className="custom-icon" />
                <Badge bg="danger" className="custom-badge">
                    {total}
                </Badge>
            </Button>
            <Offcanvas
                className={`bg-${theme}`}
                show={show}
                onHide={handleClose}
                placement="end"                
            >
                <Offcanvas.Header className={`bg-${theme}`}>
                    <Offcanvas.Title>
                        <span style={{ marginRight: '10px' }}>Carrito de Compras</span>
                        <Badge bg="danger" className="custom-badge">
                            {total}
                        </Badge>
                    </Offcanvas.Title>
                    <Button bg={theme} variant={theme} className={`btn-close-${theme}`} onClick={handleClose}>
                        <FaTimes />
                    </Button>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {purchases.length === 0 ? (<p>Carrito vacío</p>) :
                        (<ListGroup >
                            {purchases.map((purchase, index) =>
                                <ListGroup.Item key={index} className={`bg-${theme} border-0`}>
                                    <Row>
                                        <Col>
                                            <Figure>
                                                <Figure.Image
                                                    width='75%'
                                                    alt="171x180"
                                                    src={purchase.item.img}
                                                />
                                            </Figure>
                                        </Col>
                                        <Col>
                                            <h5>{purchase.item.name}</h5>
                                            <div><strong>${purchase.item.price?.toLocaleString('es-CO')}</strong></div>
                                            <div>
                                                {purchase.quantity}
                                                <Button variant="outline-secondary" size="sm"><FaTrashAlt /></Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>)}
                        </ListGroup>)}
                </Offcanvas.Body>
                <div>
                    <h5><strong>Total: ${calculateFinalPrice().toLocaleString('es-CO')}</strong></h5>
                    <div className="d-grid gap-2">
                        <Button className='square-button' variant="success" size="lg" onClick={() => alert("ir a pasarela de pagos")}>
                            Finalizar compra!
                        </Button>
                    </div>
                </div>
            </Offcanvas>

        </>


    )
}

export default CardWidget