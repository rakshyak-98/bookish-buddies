import {configureStore} from "@reduxjs/toolkit"
import teacherReducer from "./features/teacher"

export const store = configureStore({
    reducer: {
        createTeacher: teacherReducer, 
    }
})

