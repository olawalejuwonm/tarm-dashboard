import { createReducer } from "@reduxjs/toolkit";
import { tryLogin } from "./ActionCreators";
import * as ActionTypes from "./ActionTypes";
let istate = {
  isLoading: false,
  error: false,
  loggedIn: false,
  message: null,
};
export const login = createReducer(istate, {
  [tryLogin.pending]: (state, action) => {
    console.log("login/loading", action);
    return {
      ...state,
      isLoading: true,
      error: false,
      message: action.payload,
    };
  },
  [tryLogin.rejected]: (state, action) => {
    console.log("login/rejected", action);
    return {
      ...state,
      isLoading: false,
      error: true,
      message: action.error.message,
    };
  },
  [tryLogin.pending]: (state, action) => {
         console.log("login/loading", action)
      return {
        ...state,
        isLoading: true,
        error: false,
        message: action.payload,
      }; 
  }
});

// => {
//   switch (action.types) {
//     case "login/pending":
//       console.log("login/loading", action)
//       return {
//         ...state,
//         isLoading: true,
//         error: false,
//         message: action.payload,
//       };
//     case "login/fulfilled":
//       console.log("login/fullfileed", action)
//       return {
//         ...state,
//         isLoading: false,
//         error: false,
//         loggedIn: true,
//         message: action.payload,
//       };
//     case "login/rejected":
//       console.log("login/rejected", action)
//       return {
//         ...state,
//         isLoading: false,
//         error: true,
//         message: action.payload,
//       };

//     default:
//       return state;
//   }
// };
