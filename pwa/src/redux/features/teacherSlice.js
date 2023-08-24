import {createSlice} from "@reduxjs/toolkit"
const init = []

export const teacherSlick = createSlice({
    name: "teacher",
    initialState: init,
    reducers: {
        create: (state, action) =>{
            console.log(state, action)
            return state
        }
    }
})

export const {create} = teacherSlick.actions
export default teacherSlick.reducer