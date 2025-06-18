import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen:false,
    type:["必修","選修","通識"],
    class:"工管",
    query:"",
    grade:""
}

const fliterSlice = createSlice({
    name:'filter',
    initialState:initialState,
    reducers:{
        setIsOpen(state,action){
            state.isOpen = action.payload
        },
        setType(state,action){
            // console.log(action.payload)
            state.type = action.payload
        },
        setClass(state,action){
            state.class = action.payload
        },
        setQuery(state,action){
            state.query = action.payload
        },
        setGrade(state,action){
            console.log(action.payload)
            state.grade = action.payload
        }
    }
});

export const { setIsOpen,setType,setClass,setQuery,setGrade } =  fliterSlice.actions;
export default fliterSlice.reducer;