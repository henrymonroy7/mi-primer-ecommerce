import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductById } from "../../services/Product";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";


const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState(null)
    const { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId)
            .then(snapshot => {
                setProduct({ id: snapshot.id, ...snapshot.data() })
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    return (
        loading ? (<Spinner animation="border" variant="primary" />)
            : (<div className="text-left">
                <h3>Detalles del Producto</h3>
                <ItemDetail {...product}></ItemDetail>
            </div>)
    )

}

export default ItemDetailContainer;