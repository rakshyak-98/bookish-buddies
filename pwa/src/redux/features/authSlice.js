import { createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/config-default'
const authSlice = createSlice({
    name: "authenticate",
    initialState: false,
    reducers: {
       authenticate: (state, action) => {
        (async () => {
            const response = await axios.post("/login", action.payload)
            console.log(response.data)
        })()
        return state
       },
       register: (state, action) => {
        (async () => {
            const response = await axios.post("/user", action.payload)
            console.log(response.data)
        })()
       return state
       }
    }
})
export const {authenticate, register} = authSlice.actions
export default authSlice.reducer