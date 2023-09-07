import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductById } from "../../mocks/mockProducts";
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
        <div className="text-left">
            <h3>Detalles del Producto</h3>            
            <ItemDetail {...product}></ItemDetail>        
        </div>
        
    )

}

export default ItemDetailContainer;