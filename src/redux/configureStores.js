import {  applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistCombineReducers } from "redux-persist";
import { products } from "./reducers/products";



export const ConfigureStore = () => {
    // console.log("am in the store")
   
    const store = createStore(  //takes reducer(that change store) and initialstate
        products,
        applyMiddleware(thunk)
    );
    // const persistor = persistStore(store);
    return { store};
};