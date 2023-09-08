import { createContext, useState } from "react"

const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [total, setTotal] = useState(0)
    const [purchases, setPurchases] = useState([])

    const addItem = (item, quantity) =>  {              
        let purchase = {
            item: item,
            quantity: quantity
        }        
        
        purchases.push(purchase) 
        setPurchases(purchases)    
        setTotal(total + quantity)
        // console.log("purchases", purchases)        
        // console.log("total", total)        
    }

    return (
        <CartContext.Provider value = {{purchases, total, addItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext