const categories = [
    {
        id: '1',
        name: 'Vapers',
        url: '/vapers'
    },
    {
        id: '2',
        name: 'Pipes',
        url: '/pipes'
    },
    {
        id: '3',
        name: 'Papers',
        url: '/papers'
    },
    {
        id: '4',
        name: 'Grinders',
        url: '/grinders'
    },
    {
        id: '5',
        name: 'Lighters',
        url: '/lighters'
    },
    {
        id: '6',
        name: 'accesories',
        url: '/accesories'
    },
    {
        id: '7',
        name: 'Rolling machines',
        url: '/rollingmachines'
    },
    {
        id: '8',
        name: 'Bongs',
        url: '/bongs'
    }
]

export const getCategories = () => {
    return new Promise((resolve) => {
        resolve(categories)
    })
}