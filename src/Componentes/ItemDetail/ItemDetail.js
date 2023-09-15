import ItemCount from "../ItemCount/ItemCount"
import { Card, Carousel, Col, Row } from 'react-bootstrap';
import { useState } from "react";
import { useContext } from "react";
import CartContext from "../../Contexts/CartContext";

const ItemDetail = (product) => {
    const { addItem } = useContext(CartContext)
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <Card className="border-0">
                <Row>
                    <Col md={6}>
                        <Carousel activeIndex={index} onSelect={handleSelect}>
                            {product.images?.map((image, index) => (
                                <Carousel.Item key={index}>
                                    <img
                                        className="d-block w-100"
                                        src={image}
                                        alt={`Slide ${index}`}
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Col>
                    <Col md={6}>
                        <Card.Body className="text-left">
                            <Card.Title className="mb-4"><strong>{product.name}</strong></Card.Title>
                            <Card.Text className="mb-3">{product.description}</Card.Text>
                            <Card.Text className="mb-3"><strong>Precio: ${product.price?.toLocaleString('es-CO')}</strong></Card.Text>
                            <Card.Text className="mb-3" variant='info'>Stock: {product.stock}</Card.Text>
                            <div className="text-left">
                                <ItemCount initial={1} stock={product.stock} onAdd={(quantity) => addItem(product, quantity)} />

                               
                            </div>
                        </Card.Body>
                    </Col>
                </Row>
            </Card >

        </>
    )
}

export default ItemDetail
