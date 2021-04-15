import { LOADING } from "./ActionTypes"
import {  createAsyncThunk } from '@reduxjs/toolkit'
import { api } from "../components/shared"

// export const Login = (l) => {
//     return {
//         type: LOADING,
//         payload: l
//     }
// }


export const tryLogin =  createAsyncThunk('login', async (body) => {
    try {
        const response = await api("POST","auth/login", body )
        console.log("response", response)
        return response.message
    } catch (error) {
        console.log("error", error)
        throw error.message
    }
    
})