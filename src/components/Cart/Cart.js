import { Table, Figure, Button, Accordion, Form, Alert } from 'react-bootstrap';
import { FaTrashAlt } from "react-icons/fa";
import { useContext, useState } from 'react';
import CartContext from '../../contexts/CartContext';
import { addOrder } from '../../services/Order';
import { Link } from 'react-router-dom';

const initialBuyerData = {
    name: "",
    phone: "",
    email: "",
};

const Cart = () => {
    const { purchases, total, removeItem, calculateFinalPrice, emptyCar } = useContext(CartContext)
    const [buyer, setBuyer] = useState(initialBuyerData);
    const [show, setShow] = useState(false);
    const [orderNumber, setOrderNumber] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBuyer({ ...buyer, [name]: value });
    };

    const isFormIncomplete = () => {
        return buyer.name === "" || buyer.phone === "" || buyer.email === ""
    }

    const createOrder = () => {
        let order = {
            buyer: buyer,
            items: purchases.map(purchase => {
                return {
                    id: purchase.item.id,
                    title: purchase.item.name,
                    quantity: purchase.quantity,
                    price: purchase.item.price
                }
            }),
            total: calculateFinalPrice()
        }

        addOrder(order).then(snapshot => {
            setOrderNumber(snapshot.id)
            setShow(true)
        })

    }

    return (
        <div>
            <h2>Finalizando tu compra</h2>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><strong>Resumen de tu compra</strong></Accordion.Header>
                    <Accordion.Body>
                        <div style={{ textAlign: 'left' }}>
                            <Table hover>
                                <thead>
                                    <tr>
                                        <th>Producto</th>
                                        <th>Nombre</th>
                                        <th>Categoría</th>
                                        <th>Cantidad</th>
                                        <th>Precio</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {purchases.map((purchase, index) => (
                                        <tr key={index}>
                                            <td>
                                                <Figure>
                                                    <Figure.Image
                                                        width='25%'
                                                        alt="171x180"
                                                        src={purchase.item.img}
                                                    />
                                                </Figure>
                                            </td>
                                            <td>{purchase.item.name}</td>
                                            <td>{purchase.item.category}</td>
                                            <td>{purchase.quantity}</td>
                                            <td>${(purchase.item.price * purchase.quantity).toLocaleString('es-CO')}</td>
                                            <td><Button className='delete-button' variant="outline-danger" size="sm" onClick={() => removeItem(index, purchase.quantity)}><FaTrashAlt className='delete-icon' /></Button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <div style={{ textAlign: 'right' }}>
                                <h5>Total de productos: {total}</h5>
                                <h5 className='text-primary'>Total a pagar: ${calculateFinalPrice().toLocaleString('es-CO')}</h5>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><strong>Datos del cliente</strong></Accordion.Header>
                    <Accordion.Body>
                        <Form className="text-left">
                            <Form.Group controlId="name">
                                <Form.Label style={{ marginTop: '10px' }}>Nombre:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={buyer.name}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="phone">
                                <Form.Label style={{ marginTop: '10px' }}>Teléfono:</Form.Label>
                                <Form.Control
                                    type="tel"
                                    name="phone"
                                    value={buyer.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.Label style={{ marginTop: '10px' }}>Email:</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={buyer.email}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div>
                <Button variant="success" size="lg" onClick={() => createOrder()} disabled={isFormIncomplete()} style={{ marginTop: '10px' }}>
                    Pagar
                </Button>
            </div>

            {show ? (<div style={{ marginTop: "20px" }} >
                <Alert variant="success" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>Orden creada con exito!</Alert.Heading>
                    <p>Su número de orden es: <strong>{orderNumber}</strong></p>
                    <Alert.Link as={Link} to={'/'} onClick={()=> emptyCar()}>Volver al inicio</Alert.Link>
                </Alert>
            </div>) : (<></>)}

        </div>







    )
}

export default Cart