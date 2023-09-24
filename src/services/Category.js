import { getFirestore, getDocs, collection } from 'firebase/firestore'

const myCollection = "categorias"

export const getCategories = () => {
    const db = getFirestore()
    const refCollection = collection(db, myCollection)
    return getDocs(refCollection)
}