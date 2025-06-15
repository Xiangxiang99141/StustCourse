import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    infos:[],
    courses:[],
    classes:[]
}

const dataSlice = createSlice({
    name:'data',
    initialState:initialState,
    reducers:{
        setInfos(state,action){
            state.infos = action.payload
        },
        setCourses(state,action){
            state.courses = action.payload
        },
        setClasses(state,action){
            state.classes = action.payload
        }
    }
});

export const { setInfos,setCourses,setClasses } =  dataSlice.actions;
export default dataSlice.reducer;