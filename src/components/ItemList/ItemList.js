import Item from "../Item/Item";
import { Col } from "react-bootstrap";

const ItemList = ({ products }) => {

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