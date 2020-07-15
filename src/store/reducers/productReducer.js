const initState = {}

const productReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PRODUCT':
            console.log('created product', action.product)
            return {...state, status: 'success'}
        case 'CREATE_PRODUCT_ERROR':
            console.log('create product error', action.error)
            return {...state, status: 'error'}
        default:
            return state
    }
}

export default productReducer
