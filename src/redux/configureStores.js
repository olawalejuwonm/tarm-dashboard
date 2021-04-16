import {  applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistCombineReducers } from "redux-persist";
import { login } from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import { tryLogin } from "./ActionCreators";



// export const ConfigureStore = () => {
//     // console.log("am in the store")
   
//     const store = createStore(  //takes reducer(that change store) and initialstate
//         login,
//         applyMiddleware(thunk)
//     );
//     // const persistor = persistStore(store);
//     return { store};
// };

export const store = configureStore({
    reducer: {
        login: login
    },
    // middleware: applyMiddleware(thunk),
})