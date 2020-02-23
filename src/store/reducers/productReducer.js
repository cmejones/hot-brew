const initState = {
    //need to connect to database for real data
    products: [
        {id: '1', title: 'product 1', description: 'description 1', price: '$9.99', image: 'https://bluebottlecoffee.com/at-home/selection?plan=47'},
        {id: '2', title: 'product 2', description: 'description 2', price: '$29.99', image: 'https://bluebottlecoffee.com/at-home/selection?plan=31'},
        {id: '3', title: 'product 3', description: 'description 3', price: '$19.99', image: 'https://bluebottlecoffee.com/at-home/selection?plan=15'}
    ]
}

const productReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PRODUCT': 
            console.log('created product', action.product)
    }
    return state
}

export default productReducer;