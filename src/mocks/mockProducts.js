import { getFirestore, getDoc, getDocs, doc, collection, query, where } from 'firebase/firestore'

const myCollection = "productos"

export const getProducts = () => {
    const db = getFirestore()
    const refCollection = collection(db, myCollection)
    return getDocs(refCollection)
}

export const getProductById = (id) => {
    const db = getFirestore()
    const refDoc = doc(db, myCollection, id)
    return getDoc(refDoc)
}

export const getProductsByCategoryId = (categoryId) => {    
    const db = getFirestore()
    const refCollection = collection(db, myCollection)
    const condition = query(refCollection, where('category', '==', categoryId));
    return getDocs(condition)
}