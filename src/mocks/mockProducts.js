const products = [
    {
        id: '1',
        name: 'Bong',
        price: 120000,
        category: 'bongs',
        img: 'https://images.unsplash.com/photo-1621541698493-4256a218ae8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
        images: [
            'https://images.unsplash.com/photo-1621541698493-4256a218ae8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
            'https://images.unsplash.com/photo-1621541698493-4256a218ae8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
            'https://images.unsplash.com/photo-1621541698493-4256a218ae8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80'    
        ],
        stock: 10,
        description: 'Some description'
    },
    {
        id: '2',
        name: 'Pipa Retro',
        price: 20000,
        category: 'pipes',
        img: 'https://images.unsplash.com/photo-1601505612614-178f7ca0077c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
        images: [
            'https://images.unsplash.com/photo-1601505612614-178f7ca0077c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
            'https://images.unsplash.com/photo-1601505612614-178f7ca0077c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
            'https://images.unsplash.com/photo-1601505612614-178f7ca0077c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80'
        ],
        stock: 75,
        description: 'Fuma con estilo con esta fabulosa pipa'
      },
      {
        id: '3',
        name: 'Mini Bong CxG',
        price: 130000,
        category: 'pipes',
        img: 'https://images.unsplash.com/photo-1621541694081-aef305865f51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80', 
        images: [
            'https://images.unsplash.com/photo-1621541694081-aef305865f51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
            'https://images.unsplash.com/photo-1621541694081-aef305865f51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
            'https://images.unsplash.com/photo-1621541694081-aef305865f51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80'
        ],
        stock: 10,
        description: 'about this other producto ...'
      },
      {
        id: '4',
        name: 'Pickle Bong',
        price: 130000,
        category: 'bongs',
        img: 'https://images.unsplash.com/photo-1621541701284-11baeb97befc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80', 
        images: [
            'https://images.unsplash.com/photo-1621541701284-11baeb97befc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
            'https://images.unsplash.com/photo-1621541701284-11baeb97befc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
            'https://images.unsplash.com/photo-1621541701284-11baeb97befc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80'
        ],
        stock: 10,
        description: 'I´m Pickle Morty!'
      },      
    {
        id: '5',
        name: 'Rolling Papers',
        price: 5000,
        category: 'papers',
        img: 'https://rawpaper-media.s3.us-west-2.amazonaws.com/wp-content/uploads/2023/02/01001504/RAW1-4_04-28-23.png', 
        images: [
            'https://rawpaper-media.s3.us-west-2.amazonaws.com/wp-content/uploads/2023/02/01001504/RAW1-4_04-28-23.png',
            'https://rawpaper-media.s3.us-west-2.amazonaws.com/wp-content/uploads/2023/02/01001504/RAW1-4_04-28-23.png',
            'https://rawpaper-media.s3.us-west-2.amazonaws.com/wp-content/uploads/2023/02/01001504/RAW1-4_04-28-23.png'
        ],
        stock: 100,
        description: 'RAW Classic 1¼ is our original size'
    },
    {
        id: '6',
        name: 'RAW Classic Creaseless',
        price: 15000,
        category: 'papers',
        img: 'https://rawpaper-media.s3.us-west-2.amazonaws.com/wp-content/uploads/2023/02/18232609/RAW300_01-10-23.png', 
        images: [
            'https://rawpaper-media.s3.us-west-2.amazonaws.com/wp-content/uploads/2023/02/18232609/RAW300_01-10-23.png',
            'https://rawpaper-media.s3.us-west-2.amazonaws.com/wp-content/uploads/2023/02/18232609/RAW300_01-10-23.png',
            'https://rawpaper-media.s3.us-west-2.amazonaws.com/wp-content/uploads/2023/02/18232609/RAW300_01-10-23.png'
        ],
        stock: 93,
        description: 'RAW Classic Creaseless Paper for smoother burning '
    },
    {
        id: '7',
        name: 'RAW Classic Artesano',
        price: 27900,
        category: 'papers',
        img: 'https://rawpaper-media.s3.us-west-2.amazonaws.com/wp-content/uploads/2023/02/18232609/RAW300_01-10-23.png', 
        images: [
            'https://rawpaper-media.s3.us-west-2.amazonaws.com/wp-content/uploads/2023/02/18232609/RAW300_01-10-23.png',
            'https://rawpaper-media.s3.us-west-2.amazonaws.com/wp-content/uploads/2023/02/18232609/RAW300_01-10-23.png',
            'https://rawpaper-media.s3.us-west-2.amazonaws.com/wp-content/uploads/2023/02/18232609/RAW300_01-10-23.png'
        ],
        stock: 293,
        description: 'An impressive step forward in portable rolling technology'
    },
    {
        id: '8',
        name: 'Pipa caleta',
        price: 9900,
        category: 'pipes',
        img: 'https://www.bloommart.co/cdn/shop/products/EyceShortyNEGRA_1800x1800.png?v=1626711218', 
        images: [
            'https://www.bloommart.co/cdn/shop/products/EyceShortyNEGRA_1800x1800.png?v=1626711218',
            'https://www.bloommart.co/cdn/shop/products/EyceShortyNEGRA_1800x1800.png?v=1626711218',
            'https://www.bloommart.co/cdn/shop/products/EyceShortyNEGRA_1800x1800.png?v=1626711218'
        ],
        stock: 666,
        description: 'Warning! Police in the streets'
    }

]

export const getProducts = () => {
    let promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)        
    })
    return promise
}

export const getProductById = (id) => {
    let promise = new Promise((resolve) => {
        resolve(products.find(prod => prod.id === id))
    })
    return promise
}

export const getProductsByCategoryId = (categoryId) => {
    let promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)          
    })
    return promise
}