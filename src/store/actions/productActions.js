export const createProduct = (product) => {
    return async (dispatch, getState, {getFirebase, getFirestore}) => {
        try{
            const firestore = getFirestore();
            await firestore.collection('products').add(product)
            dispatch({type: 'CREATE_PRODUCT', product})
        }
        catch (error) {
            dispatch({type: 'CREATE_PRODUCT_ERROR', error})
        }
    }
}
