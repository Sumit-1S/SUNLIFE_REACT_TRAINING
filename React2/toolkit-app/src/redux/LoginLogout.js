import { createSlice } from "@reduxjs/toolkit";

export const loginlogout = createSlice({
    name:'authService',
    initialState:{
        loggedIn:false
    },
    reducers:{
        login:(state)=>{
            state.loggedIn=true
        },
        logout:(state)=>{
            state.loggedIn=false
        }
    }
})
export const {login,logout} = loginlogout.actions
export default loginlogout.reducer