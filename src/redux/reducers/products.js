import * as ActionTypes from "../ActionTypes";

export const products = (state = {
    isLoading: true,
    errMess: null,
    products: []
}, action) => {
    switch (action.type) {
        case ActionTypes.PRODUCTS_LOADING:
            return { ...state, isLoading: true, errMess: null };
        case ActionTypes.PRODUCTS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };
        case ActionTypes.ADD_PRODUCTS: {
            const id = state.products.length;
            (action.payload).id = id;
            return { ...state, isLoading: false, errMess: null, products: state.products.concat(action.payload) };
        }
       
        default:
            return state;
    }
};