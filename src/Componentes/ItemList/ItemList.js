import ListGroup from 'react-bootstrap/ListGroup';
import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return (
        <ListGroup horizontal>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </ListGroup>
    )
}

export default ItemList