import { getFirestore, addDoc, collection, serverTimestamp } from 'firebase/firestore'

const myCollection = "ordenes"

export const addOrder = (order) => {    
    const db = getFirestore()
    const refDocument = collection(db, myCollection)
    order.date = serverTimestamp()    
    return addDoc(refDocument, order)
}
