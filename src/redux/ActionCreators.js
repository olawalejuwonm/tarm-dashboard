import {LOADING} from './ActionTypes';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../components/shared';

// export const Login = (l) => {
//     return {
//         type: LOADING,
//         payload: l
//     }
// }
// export const userBe =  createAsyncThunk('login', async (req) => {
//     try {
//         const response = await api(req.point, req.url, req.body )
//         // console.log("response", response)
//         if (response.status == "200") {
//             localStorage.setItem("token", response.data.token)
//             return response
//         }
//         return response.message
//     } catch (error) {
//         // console.log("error", error)
//         throw error.message
//     }

// })

export const fetchFeedback = createAsyncThunk('feedback', async (req) => {
  try {
    const response = await api(req.point, req.url, req.body);
    // console.log("response", response)
    return response.message;
  } catch (error) {
    // console.log("error", error)
    throw error.message;
  }
});

export const tryLogin = createAsyncThunk('login', async (req) => {
  try {
    const response = await api(req.point, req.url, req.body);
    // console.log("response", response)
    if (response.status == '200') {
      localStorage.setItem('token', response.data.token);
      return response;
    }
    return response.message;
  } catch (error) {
    // console.log("error", error)
    throw error.message;
  }
});
