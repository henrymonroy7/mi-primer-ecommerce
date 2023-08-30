import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductById } from "../../mockProducts";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState(null)
    const {itemId} = useParams()

    useEffect(() => {
        getProductById(itemId)
            .then(response => {                                
                setProduct(response)
            })
            .catch(error => {
                console.log("Ha ocurrido un error", error)
            })
    }, [itemId])

    return (
        <ItemDetail {...product}></ItemDetail>        
    )

}

export default ItemDetailContainer;