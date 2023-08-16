const products = [
    { 
        id: '1', 
        name: 'Simple Bong', 
        price: 120000, 
        category: 'Bong', 
        img: 'https://images.unsplash.com/photo-1621541698493-4256a218ae8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80', 
        stock: 60, 
        description: 'Excelente bong para una tarde relajada' 
    },
    { id: '2', name: 'Pipa Retro', price: 20000, category: 'Pipas elegantes', img: 'https://images.unsplash.com/photo-1601505612614-178f7ca0077c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80', stock: 75, description: 'Fuma con estilo con esta fabulosa pipa' },
    { id: '3', name: 'Mini Bong CxG', price: 130000, category: 'categoria 3', img: 'https://images.unsplash.com/photo-1621541694081-aef305865f51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80', stock: 10, description: 'about this other producto ...' },
    { id: '4', name: 'Pickle Bong', price: 130000, category: 'Bong', img: 'https://images.unsplash.com/photo-1621541701284-11baeb97befc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80', stock: 10, description: 'I´m Pickle Morty!' }
]

export const getProducts = () => {
    let promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 250)
    })
    return promise
}