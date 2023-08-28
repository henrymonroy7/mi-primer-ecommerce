import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductById } from "../../mockProducts";


const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState(null)

    useEffect(() => {
        getProductById('1')
            .then(response => {                
                console.log("product", response)
                setProduct(response)
            })
            .catch(error => {
                console.log("Ha ocurrido un error", error)
            })
    }, [])

    return (
        <ItemDetail {...product}></ItemDetail>        
    )

}

export default ItemDetailContainer;