import ItemCount from "../ItemCount/ItemCount"
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const ItemDetail = (product) => {
    return (
        <>
            <Container>
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
                    </Card.Body>
                    <Card.Footer>
                        <ItemCount initial={1} stock={product.stock} onAdd={(quantity) => console.log('cantidad agregada: ', quantity)} />
                    </Card.Footer>
                </Card>
            </Container>
        </>
    )
}

export default ItemDetail