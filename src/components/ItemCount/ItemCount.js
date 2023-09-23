import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa'

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
                    <Button style={{marginRight:10}} variant='secondary' size="sm" onClick={decrement}> <FaMinus/> </Button>
                    <span><h4 style={{padding:3}}>{quantity}</h4></span>
                    <Button style={{marginLeft:10}} variant='secondary' size="sm" onClick={increment}> <FaPlus/></Button>
                </ButtonGroup>
            </div>
            <div>
                <Button className="Button" size="md" onClick={() => onAdd(quantity)} >
                    Add to Cart
                </Button>
            </div>
        </>
    )
}

export default ItemCount