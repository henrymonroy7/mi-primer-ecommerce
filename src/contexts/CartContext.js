import { createContext, useState } from "react"

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [total, setTotal] = useState(0)
    const [purchases, setPurchases] = useState([])    

    const addItem = (item, quantity) => {
        let ItemExists = purchases.some(purchase => purchase.item.id === item.id)
        if (ItemExists) {
            const purchaseToUpdate = purchases.find(purchase => purchase.item.id === item.id)
            purchaseToUpdate.quantity += quantity
            setPurchases(purchases)
        } else {
            setPurchases([...purchases, { item, quantity }])
        }
        setTotal(total + quantity)
    }

    const removeItem = (indexToRemove, quantity) => {
        let newPurchases = purchases.filter((p, index) => index !== indexToRemove)
        setPurchases(newPurchases)
        setTotal(total - quantity)
    }

    const calculateFinalPrice = () => {
        return purchases.reduce((totalPrice, purch) => {
            return totalPrice + purch.item.price * purch.quantity;
        }, 0);
    };

    const emptyCar = () => {
        setPurchases([])
        setTotal(0)
    }



    return (
        <CartContext.Provider value={{ purchases, total, addItem, removeItem, calculateFinalPrice, emptyCar }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext