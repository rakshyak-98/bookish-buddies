import {createSlice} from "@reduxjs/toolkit"
const init = []

export const teacherSlick = createSlice({
    name: "teacher",
    initialState: init,
    reducers: {
        create: (...data) =>{
            console.log(data)
        }
    }
})

export const {create} = teacherSlick.actions
export default teacherSlick.reducer