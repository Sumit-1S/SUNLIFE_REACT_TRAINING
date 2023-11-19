import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterReducer";
import LoginLogout from "./LoginLogout";


export default configureStore({
    reducer:{
        Counter: counterReducer,
        AuthService: LoginLogout
    }
})