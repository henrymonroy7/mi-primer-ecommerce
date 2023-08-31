import Item from "../Item/Item";
import { Container, Col, Row } from "react-bootstrap";

const ItemList = ({ products }) => {
    if (products.length === 0) {
        return <h4>No hay elementos disponibles.</h4>;
    }

    return (
        <div className="card-grid">
            {products.length === 0 ? (
                <Col><p>No hay elementos disponibles.</p></Col>
            ) : (
                products.map(prod => <Item key={prod.id} {...prod} />)
            )}
        </div>
    )
}

export default ItemList