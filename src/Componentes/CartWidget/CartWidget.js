import cart from './assets/cart.svg'
import { Badge } from 'react-bootstrap'

const CardWidget = () => {
    return (
        <div>
            <img src = { cart } alt="carrito" style = {{ width: 25}}/>
            <span><Badge bg="danger">0</Badge></span>
        </div>
    )
}

export default CardWidget