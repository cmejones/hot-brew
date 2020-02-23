export const createProduct = (product) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        dispatch({ type: 'CREATE_PRODUCT', product });
    }
};