import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from 'react';

const ItemCount = ({initial, stock, onAdd}) => {
    const [quantity, setQuantity] = useState(initial) 

    const increment = () => {
        if(quantity < stock){
            setQuantity(quantity+1)
        }        
    }

    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity-1)
        }
    }

    return (
        <>
            <div>
                <ButtonGroup style={{marginBottom:10}}>
                    <Button style={{marginRight:10}} variant='secondary' onClick={decrement}> - </Button>
                    <span><h4 style={{padding:3}}>{quantity}</h4></span>
                    <Button style={{marginLeft:10}} variant='secondary' onClick={increment}> + </Button>
                </ButtonGroup>
            </div>
            <div>
                <Button className="Button" onClick={() => onAdd(quantity)} >
                    Add to Cart
                </Button>
            </div>
        </>
    )
}

export default ItemCount