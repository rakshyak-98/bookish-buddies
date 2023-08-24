import {configureStore} from "@reduxjs/toolkit"
import teacherReducer from "./features/teacherSlice"
import authReducer from  './features/authSlice'

export const store = configureStore({
    reducer: {
        createTeacher: teacherReducer, 
        loginUser: authReducer,
    } 
})

