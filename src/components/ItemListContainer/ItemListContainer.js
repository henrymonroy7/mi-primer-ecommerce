import { useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useEffect } from "react"
import { getProducts, getProductsByCategoryId } from "../../mocks/mockProducts"
import { useParams } from "react-router-dom"
import { Spinner } from "react-bootstrap"
// import { useContext } from "react"
// import ThemeContext from "../../Contexts/ThemeContext"

const ItemListContainer = () => {
    // const { theme } = useContext(ThemeContext)
    const [title, setTitle] = useState(null)
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        const myFunction = categoryId ? getProductsByCategoryId : getProducts
        setTitle(categoryId ? categoryId : "Todos los productos")

        myFunction(categoryId)                              
            .then(snapshot => {
                setProducts(snapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                }))
            })
            .catch(error => {
                console.log("Ha ocurrido un error", error)
            }).finally(() => {                           
                setLoading(false)
            })

    }, [categoryId])

    return (
        loading ? <Spinner animation="border" variant="primary" /> :
            <div /*className={`bg-${theme}`}*/ style={{ paddingBottom: '20px' }}>
                <h5 style={{ marginBottom: '20px', textAlign: 'left' }}>{title}</h5>
                <ItemList products={products} />
            </div>
    )
}

export default ItemListContainer