import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';


const Item = (product) => {
    return (
        <Col>
            <Card style={{ width: '20rem', marginBottom: '10px' }}>
                <Card.Img variant="top" src={product.img} style={{ marginBottom: '10px' }} />
                <Card.Title>{product.name}</Card.Title>
                <Card.Subtitle>$ {product.price}</Card.Subtitle>
                <Card.Body>
                    <Card.Text >
                        {product.description}
                    </Card.Text>
                    <Card.Text >
                        Stock disponible: {product.stock}
                    </Card.Text>
                    <Card.Text >
                        Category: {product.category}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link to={`item/${product.id}`}>Ver detalle</Link>
                </Card.Footer>
            </Card>

        </Col>

    )

}

export default Item