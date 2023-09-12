import { Table, Figure, Button } from 'react-bootstrap';
import { FaTrashAlt } from "react-icons/fa";
import { useContext } from 'react';
import ThemeContext from '../../Contexts/ThemeContext';
import CartContext from '../../Contexts/CartContext';

const Cart = () => {
    const { theme } = useContext(ThemeContext)
    const { purchases, total, removeItem, calculateFinalPrice } = useContext(CartContext)

    return (
        <div style={{ textAlign: 'left' }}>
            <h2>Detalles de tu compra</h2>
            <Table bg={theme} variant={theme} hover>
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
                        <tr key={purchase.id}>
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
                {/* <Row>
                    <Col>
                        <h5>Total de productos: {total}</h5>
                        <h5 className='text-primary'>Total a pagar: ${calculateFinalPrice().toLocaleString('es-CO')}</h5>
                    </Col>
                    <Col>
                        <Button variant="success" size="lg" onClick={() => alert("Hemos desocupado tu tarjeta de crédito!")}>
                            Pagar!
                        </Button>
                    </Col>
                </Row> */}
                <h5>Total de productos: {total}</h5>
                <h5 className='text-primary'>Total a pagar: ${calculateFinalPrice().toLocaleString('es-CO')}</h5>
                <Button variant="success" size="lg" onClick={() => alert("Hemos desocupado tu tarjeta de crédito!")}>
                    Pagar!
                </Button>
            </div>
        </div>

    )
}

export default Cart