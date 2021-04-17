import {createReducer} from '@reduxjs/toolkit';
import {fetchFeedback, tryLogin} from './ActionCreators';
import * as ActionTypes from './ActionTypes';
let istate = {
  isLoading: false,
  error: false,
  message: null,
};

export const feedback = createReducer({...istate, feedbacks: {}}, {
  [fetchFeedback.fulfilled]: (state, action) => {
    console.log("login/fulffiled", action);
    return {
      ...state,
      isLoading: false,
      loggedIn: true,
      error: false,
      // user: action.payload.data.user,
      // message: action.payload.message,
    };
  },
  [fetchFeedback.rejected]: (state, action) => {
    console.log("login/rejected", action);
    return {
      ...state,
      isLoading: false,
      error: true,
      message: action.error.message,
    };
  },
  [fetchFeedback.pending]: (state, action) => {
     console.log("login/loading", action)
    return {
      ...state,
      isLoading: true,
      error: false,
      message: action.payload,
    };
  },
});

export const login = createReducer(
  {...istate, user: {}, loggedIn: false},
  {
    [tryLogin.fulfilled]: (state, action) => {
      // console.log("login/fulffiled", action);
      return {
        ...state,
        isLoading: false,
        loggedIn: true,
        error: false,
        user: action.payload.data.user,
        message: action.payload.message,
      };
    },
    [tryLogin.rejected]: (state, action) => {
      // console.log("login/rejected", action);
      return {
        ...state,
        isLoading: false,
        error: true,
        message: action.error.message,
      };
    },
    [tryLogin.pending]: (state, action) => {
      //  console.log("login/loading", action)
      return {
        ...state,
        isLoading: true,
        error: false,
        message: action.payload,
      };
    },
  }
);

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
