import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Item = (product) => {
    const formattedPrice = product.price.toLocaleString('es-CO', {
        style: 'currency',
        currency: 'COP'
    });

    return (
        <Col>
            <Card className="mb-4" style={{ marginBottom: '10px' }}>
                <Card.Img variant="top" src={product.img} style={{ marginBottom: '10px' }} />
                <Card.Title>{product.name}</Card.Title>
                <Card.Subtitle>{formattedPrice}</Card.Subtitle>
                <Card.Body>
                    <Card.Text >{product.description}</Card.Text>
                    <Card.Text >Stock disponible: {product.stock}</Card.Text>
                    <Card.Text >Category: {product.category}</Card.Text>
                </Card.Body>
                <Card.Footer>                    
                    <Button variant="primary" href={`item/${product.id}`}>
                        Ver detalle
                    </Button>
                </Card.Footer>
            </Card>
        </Col>
    )

}

export default Item