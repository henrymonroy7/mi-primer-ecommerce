import { useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useEffect } from "react"
import { getProducts, getProductsByCategoryId } from "../../mockProducts"
import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {
        const myFunction = categoryId ? getProductsByCategoryId : getProducts

        myFunction(categoryId)
            .then(response => {                
                setProducts(response)
            })
            .catch(error => {
                console.log("Ha ocurrido un error", error)
            })

    }, [categoryId])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer