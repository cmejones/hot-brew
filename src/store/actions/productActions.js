import { db } from '../../firebase/firebase.utils';
import { FETCH_PRODUCTS }  from './auth';
import { CREATE_PRODUCT } from './auth';

export const createProduct = (product) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        dispatch({ 
            type: CREATE_PRODUCT, 
            product 
        });
    }
};

export const fetchProducts = () => async dispatch => {
    db.on('value', snapshot => {
        dispatch({
            type: FETCH_PRODUCTS,
            payload: snapshot.val()
        });
    });
};

