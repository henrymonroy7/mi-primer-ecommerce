import { useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useEffect } from "react"
import { getProducts } from "../../mockProducts"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.log("Ha ocurrido un error", error)
            })

    }, [])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer