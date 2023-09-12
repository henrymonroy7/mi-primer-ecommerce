import { Badge, Button, Offcanvas, ListGroup, Figure, Col, Row } from 'react-bootstrap'
import { FaShoppingCart, FaRunning, FaTimes, FaTrashAlt } from "react-icons/fa";
import './CartWidget.css';
import ThemeContext from '../../Contexts/ThemeContext';
import CartContext from '../../Contexts/CartContext';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';


const CardWidget = () => {
    const { theme } = useContext(ThemeContext)
    const { purchases, total, removeItem, calculateFinalPrice } = useContext(CartContext)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                    {purchases.length === 0 ?
                        (<>
                            <p>No hay productos en el carrito</p>
                            <Figure>
                                <Figure.Image
                                    width='100%'
                                    alt="171x180"
                                    src='https://www.ofientrega.com.mx/assets/images/carritoVacio.png'
                                />
                            </Figure>
                        </>
                        ) :
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
                                            <div>${purchase.item.price?.toLocaleString('es-CO')}</div>
                                            <div className='purchase-item'>
                                                Cantidad: {purchase.quantity}
                                                <Button className='delete-button' variant="outline-secondary" size="sm" onClick={() => removeItem(index, purchase.quantity)}><FaTrashAlt className='delete-icon' /></Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>)}
                        </ListGroup>)}
                </Offcanvas.Body>
                <div>
                    {purchases.length === 0 ?
                        (<>
                            <div className="d-grid gap-2">
                                <Button className='square-button' variant="primary" size="lg" as={Link} to={'/'} onClick={handleClose}>
                                    Ir de compras... <FaRunning /> 
                                </Button>
                            </div>
                        </>
                        ) :
                        (<>
                            <h5 style={{ marginLeft: '10px' }}><strong>Total:</strong> ${calculateFinalPrice().toLocaleString('es-CO')}</h5>
                            <div className="d-grid gap-2">
                                <Button className='square-button' variant="success" size="lg" as={Link} to={'/payment'} onClick={handleClose}>
                                    Finalizar compra!
                                </Button>
                            </div>
                        </>)}

                </div>
            </Offcanvas>
        </>
    )
}

export default CardWidget