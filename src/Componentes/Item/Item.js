import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Item = (product) => {

    return (
        <Col>
            <Card style={{ marginBottom: '10px' }}>
                <Card.Img variant="top" src={product.img} style={{ marginBottom: '10px' }} />
                <Card.Title>{product.name}</Card.Title>
                <Card.Subtitle>${product.price.toLocaleString('es-CO')}</Card.Subtitle>
                <Card.Body>                    
                    <Card.Text >Category: {product.category}</Card.Text>
                </Card.Body>
                <Card.Footer>                    
                    <Button variant="primary" as={Link} to={`/item/${product.id}`}>
                        Ver detalle
                    </Button>
                </Card.Footer>
            </Card>
        </Col>
    )

}

export default Item